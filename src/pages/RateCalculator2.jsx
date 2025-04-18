import React from "react";
import calculation from "../images/Rectangle 346258245.png";
import { useGlobalFormik } from "../utils/custom-hooks/formik-hook/useGlobalFormik";
import {
  rateCalInitialValues,
  rateCalSchema,
} from "../utils/validation-schema/rate-calculator-schema/rateCalculatorSchema";
import CustomInputField from "../components/input-field/CustomInput";
import Dropdown from "../components/input-field/Dropdown";
import UnitField from "../components/input-field/UnitField";

const RateCalculator2 = () => {
  const formik = useGlobalFormik(
    rateCalInitialValues,
    rateCalSchema,
    (values) => {
      // console.log("Login Form submitted", values);
    }
  );
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <>
      <div
        className="bg-cover bg-no-repeat  m-10 "
        style={{ backgroundImage: `url(${calculation})` }}
      >
        <div className="   bold-sansation text-custom-white p-20 ">
          <h2 className="lg:text-4xl  text-sm">
            <span className="text-custom-green ">FASTER</span> THAN YOU IMAGINE
          </h2>
          <p className=" text-xs lg:text-lg ">Shipping Cost Calculator</p>
        </div>
      </div>

      <div className="container mx-auto rounded-xl  shadow-md border border-custom-gray bg-custom-white ">
          <form onSubmit={formik.handleSubmit}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-10 mt-5">
            <Dropdown
              title="Mode Type"
              options={options}
              placeholder="Select"
              name="orderType"
              value={options.find(
                (option) => option.value === formik.values.orderType
              )}
              onChange={(option) =>
                formik.setFieldValue("orderType", option.value)
              }
              onBlur={formik.handleBlur}
              error={formik.errors.orderType}
              touched={formik.touched.orderType}
            />
            <CustomInputField
              title="Select Order Type"
              type="text"
              placeholder="Enter Your ID"
              name="orderType"
              value={formik.values.orderType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.orderType}
              touched={formik.touched.orderType}
            />
            <CustomInputField
              title="Select Order Type"
              type="text"
              placeholder="Enter Your ID"
              name="orderType"
              value={formik.values.orderType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.orderType}
              touched={formik.touched.orderType}
            />
            <CustomInputField
              title="Select Order Type"
              type="text"
              placeholder="Enter Your ID"
              name="orderType"
                unit="KG"
              value={formik.values.orderType}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.orderType}
              touched={formik.touched.orderType}
            />
             <UnitField
                  placeholder="Width"
                  unit="CM"
                  unitClassName="text-sm"
                  name="packageDimensions.width"
                  value={formik.values.packageDimensions.width}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  touched={formik.touched.packageDimensions?.width}
                  error={formik.errors.packageDimensions?.width}
                />
        </div>
          </form>
      </div>
    </>
  );
};

export default RateCalculator2;
