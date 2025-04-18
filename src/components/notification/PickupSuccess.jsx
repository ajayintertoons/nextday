import React, { useEffect } from "react";
import success from "../../images/success.png";
import Button2 from "../../components/button/Button";
import { useNavigate, useParams } from "react-router-dom";


const PickupSuccess = () => {
  const searchParams = new URLSearchParams(location.search);
  const reqNo = searchParams.get("reqNo");
  const referenceNumber = searchParams.get("referenceNumber");
  const navigate = useNavigate();
   useEffect(()=>{
    if(!reqNo){
      navigate('/404');
    }
   },[]);
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
        <div className="w-full flex justify-center gap-10 items-center mt-3">
          <Button2
            buttonText=" Print Receipts"
            className=" text-custom-white bg-custom-green border rounded-3xl md:w-[15rem] lg:w-[15rem] "
          />
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

export default PickupSuccess;
