import React, { useEffect, useState } from "react";
import success from "../../../images/success.png";
import Button2 from "../../button/Button2";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import request from '../../../utils/request'
import toast from "react-hot-toast";



const Success = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const reqNo = searchParams.get("reqNo");
  const referenceNumber = searchParams.get("referenceNumber");
  const bookingId = searchParams.get('bookingId');
  const [pdfData,setPdfData] = useState();
  const navigate = useNavigate();
   useEffect(()=>{
    if(!reqNo){
      console.log("hello")
      navigate('/404');
    }else{
      fetchPdf();
    }
   },[])

   const fetchPdf = async()=>{
    request({
      url: `V1/getBoxLabels`,
      method: 'POST',
      data:{
        "bookingId":bookingId
      }
    }).then((response) => {
      setPdfData(response);
    }).catch((err) => {
      toast.dismiss();
      toast.error(err?.response?.message || "Something went wrong");
    })
   }


  return (
    <>
      {/* ------------------------------ main div ------------------------------ */}
      {reqNo && <div className="container mx-auto my-20 flex flex-col items-center  ">
        {/* image container */}
        <div className="w-1/4 mb-5 ">
          <img src={success} alt="success" className="mx-auto" />
        </div>
        {/* image container end */}

        {/* Succes info*/}
        <div className="pt-2  text-center w-1/3">
          <h5 className="text-xl font-bold text-custom-blue">
            {`${referenceNumber != 0 ? 'Booking Created':"Pickup Request Created Successfully"}`}
          </h5>
          <div className="mt-2  text-center ">
            {referenceNumber != 0 &&<p className="text-sm font-sansation font-regular text-[#75759E]">
              Thank you for creating a new booking. Your AWB is #{reqNo} <br />
              Your reference number is {referenceNumber}
            </p>}
            {referenceNumber == 0 &&<p className="text-sm font-sansation font-regular text-[#75759E]">
              Your Pickup Request Number is #{reqNo} <br />
              Thank you!
            </p>}
          </div>
        </div>
        {/* Success info end */}

        {/* Button and Link */}
        <div className=" w-full flex justify-center gap-10 items-center mt-3">
          <a
          href={pdfData}
          target="_blank"
            className="flex items-center border justify-center rounded-md  font-sansation font-regular py-3 text-custom-white bg-custom-green border rounded-3xl md:w-[15rem] lg:w-[15rem] "
          > Print Receipts</a>
          <a href="/home/customer/dashboard" className="text-custom-green underline ">
            Continue to Dashboard
          </a>
        </div>
        {/* Button and Link end */}
      </div>}
      {/* ------------------------------ main div end ------------------------------ */}
    </>
  );
};

export default Success;
