import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import request from '../utils/request';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import { convertDateFormat, getTodayDate } from '../utils/helpers';


// Yup validation schema
const validationSchema = Yup.object({
  pickupScheduleFrom: Yup.string().required("Please select a pickup schedule"),
  pickupScheduleTo: Yup.string()
    .required("Please select a pickup time")
    .test("pickup-time-after-schedule", "To time must be after the From time", function (value) {
      const { pickupScheduleFrom } = this.parent; // Access the other field value

      if (pickupScheduleFrom && value) {
        const fromDate = new Date(pickupScheduleFrom);
        const toDate = new Date(value);

        // Check if pickupScheduleTo is after pickupScheduleFrom
        return toDate > fromDate; // Validates that toDate is later than fromDate
      }

      return true; // If one of the values is not set, don't fail the validation
    }),
  approxWeight: Yup.number().required('Approximate Weight is required').positive('Weight must be positive').integer('Weight must be an integer'),
});

const CreatePickupRequest = () => {
  const [loading, setLoading] = useState(false);
  const [editData, setEditData] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location?.search);
  const id = queryParams.get('id');
  const [fromDate, setFromDate] = useState();
  const [minScheduleTo, setMinScheduleTo] = useState('');
  const [maxScheduleTo, setMaxScheduleTo] = useState('');

  const clearSessionStorage = () => {
    const keys = ["package", "pickupOptions", "selectedConsigner", "selectedConsignee"];
    keys.forEach((key) => sessionStorage.removeItem(key));
    console.log("Session storage cleared:", keys);
  };
  

  // Handle form submission
  const handleSubmit = async (values, { resetForm }) => {
    setLoading(true);
    request({
      url: `V1/customer/pickup-request`,
      method: 'POST',
      data: {
        "pickupScheduleFrom": convertDateFormat(values?.pickupScheduleFrom),
        "pickupScheduleTo": convertDateFormat(values?.pickupScheduleTo),
        "approxWeight": values?.approxWeight
      }
    }).then((response) => {
      clearSessionStorage();
      toast.dismiss();
      toast.success(response?.message);
      resetForm();
      setLoading(false);
    }).catch((err) => {
      toast.dismiss();
      toast.error(err?.response?.data?.message || "Something went wrong");
      setLoading(false)
    })
  };

  const fetchEditData = async () => {
    request({
      url: `V1/customer/pickup-request/${id}`,
      method: 'GET',
    }).then((response) => {
      setEditData(response?.data?.[0]);
    }).catch((err) => {
      toast.dismiss();
      toast.error(response.message);
    });
  }

  useEffect(() => {
    if (id) {
      fetchEditData();
    }
  }, [id])

  const initialValues = {
    pickupScheduleFrom: editData?.pickupScheduleFrom ? convertDateFormat(editData?.pickupScheduleFrom) : null,
    pickupScheduleTo: editData?.pickupScheduleTo ? convertDateFormat(editData?.pickupScheduleTo) : null,
    approxWeight: editData?.approxWeight || "",
  };

  useEffect(() => {
    if (fromDate) {
      const pickupFromDate = new Date(fromDate);
      const minTime = pickupFromDate.toISOString().slice(0, 16);
      setMinScheduleTo(minTime);
      const maxTime = `${pickupFromDate.toISOString().slice(0, 10)}T23:59`;
      setMaxScheduleTo(maxTime);
    }
  }, [fromDate])

  const handlePickupScheduleFromChange = (e) => {
    const value = e.target.value;
    setFromDate(value); 
  };

  return (
    <div className="p-4 ">
      <div className=" p-6 rounded-lg shadow-md w-full ">
        <h1 className="text-2xl font-bold font-sansation text-gray-800 mb-6">{editData ? "Update Pickup Request" : "Create Pickup Request"}</h1>

        <div className='grid grid-cols-2 h-full rounded-md shadow-sm' >
          <div className=''>
            <Formik
              enableReinitialize={true}
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ setFieldValue }) => (
                <Form className=''>
                  <div className='flex flex-col mb-3 gap-3 py-4'>
                    <div className="">
                      <label className="block font-regular font-sansation" htmlFor="pickupScheduleFrom">Pickup Schedule (From):</label>
                      <Field
                        type="datetime-local"
                        id="pickupScheduleFrom"
                        name="pickupScheduleFrom"
                        min={getTodayDate()}
                        onChange={(e) => {
                          handlePickupScheduleFromChange(e); 
                          setFieldValue('pickupScheduleFrom', e.target.value);
                        }}
                        className="mt-1 block w-full px-3 py-2 border rounded-md border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage name="pickupScheduleFrom" component="div" className="text-red-500 text-sm" />
                    </div>

                    <div className="">
                      <label className="block font-regular font-sansation" htmlFor="pickupScheduleTo">Pickup Schedule (To):</label>
                      <Field
                        type="datetime-local"
                        id="pickupScheduleTo"
                        name="pickupScheduleTo"
                        min={minScheduleTo}
                        max={maxScheduleTo}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage name="pickupScheduleTo" component="div" className="text-red-500 text-sm " />
                    </div>

                    <div className=" ">
                      <label className="block font-regular font-sansation" htmlFor="approxWeight">Approximate Weight:</label>
                      <Field
                        type="number"
                        id="approxWeight"
                        name="approxWeight"
                        placeholder="approxWeight"
                        style={{ height: "44px" }}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <ErrorMessage name="approxWeight" component="div" className="text-red-500 text-sm " />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className=" py-2 px-4 bg-[#1ba169] text-white font-semibold font-sansation rounded-lg min-w-[100px] transition duration-300"
                  >
                    {loading ? <ClipLoader color='white' size={18} /> : `${editData ? "Update" : "Submit"}`}
                  </button>
                  {editData && <button
                    type="button"
                    className=" py-2 px-4 ms-3 bg-[#1ba169] text-white font-semibold font-sansation rounded-lg min-w-[100px] transition duration-300"
                    onClick={() =>  {
                      clearSessionStorage();
                      navigate(`/create-pickup?pickupReqId=${editData?.pickupReqId}`);
                    }}
                  >
                    {loading ? <ClipLoader color='white' size={18} /> : "Create Booking"}
                  </button>}
                  {editData && <button
                    type="button"
                    className="py-2 px-4 ms-3 bg-red-600 text-white font-semibold font-sansation rounded-lg min-w-[100px] transition duration-300"
                  >
                    {loading ? <ClipLoader color='white' size={18} /> : "Cancel"}
                  </button>}
                </Form>
              )}
            </Formik>
          </div>
          <div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CreatePickupRequest;
