import React, { useState, useContext } from "react";
import CustomInputField from "../components/input-field/CustomInput";
import Button from "../components/button/Button";
import OTP_InputField from "../components/input-field/OTP_InputField";
import { useGlobalFormik } from "../utils/custom-hooks/formik-hook/useGlobalFormik";
import { loginWithOTPInitialValues, loginWithOTP, loginWithOTPInitialValues2, loginWithOTP2 } from "../utils/validation-schema/auth-schema/authSchema";
import { useOtpHandler } from "../utils/custom-hooks/otp-handler/otpHandler";
import { myContext } from "../utils/context_api/context";
import toast from "react-hot-toast";
import request from '../utils/request';
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const LoginWith_OTP = () => {
  const [mobileError, setMobileError] = useState('');
  const [otpError, setOtpError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { setUserData, verifiedMobile, setVerifiedMobile, setIsLoginModalOpen, setIsLogin, userType, setUserType } = useContext(myContext);

  //Formik for mobile number
  const formik = useGlobalFormik(
    loginWithOTPInitialValues,
    loginWithOTP,
    (values) => {
      localStorage.setItem("loginMobile", values.mobile);
      setLoading(true);
      setMobileError('');
      request({
        url: 'V1/sendotp',
        method: 'POST',
        data: {
          "mobile": values.mobile,
          "type": "login",
          "usertype": "customer"
        }
      })
        .then((response) => {
          if (response.data.length > 0) {
            toast.dismiss();
            toast.success(response.data[0].message);
            
            setLoading(false);
            setVerifiedMobile(false);
          }
        })
        .catch((err) => {
          setLoading(false);
          if (err.response?.status === 400) {
            err.response.data.errors.forEach((item) => {
              if (item.path === "mobile") {
                setMobileError(item.msg);
              }
            });
          }
          if (err.response?.status === 500) {
            toast.dismiss();
            toast.error(err.response.data.message);
          }
        });
    }
  );

  // Formik for OTP
  const formik2 = useGlobalFormik(
    loginWithOTPInitialValues2,
    loginWithOTP2,
    (values) => {
      setLoading(true)
      request({
        url: 'V1/verifyotp',
        method: 'POST',
        data: {
          "mobile": localStorage.getItem('loginMobile'),
          "type": "login",
          "usertype": "customer",
          "otp": values.otp1 + values.otp2 + values.otp3 + values.otp4 + values.otp5
        }
      })
        .then((response) => {
          if (response.data.length > 0) {
            localStorage.setItem('userData', JSON.stringify(response.data[0]));
            localStorage.setItem('accessToken', response.data[0]?.accessToken);
            localStorage.setItem('refreshToken', response.data[0]?.refreshToken);
            setIsLoginModalOpen(false);
            setUserData(response.data[0]);
            setUserType(response.data[0].userRole)
            setIsLogin(true);
            setLoading(false);
            localStorage.removeItem('loginMobile');
            navigate(`/home/${response.data[0].userRole.toLowerCase()}/dashboard`);
            setTimeout(() => {
              toast.dismiss();
              toast.success('Logged in successfully')
            }, 1000);
          }
        })
        .catch((err) => {
          setLoading(false)
          if (err.response.status === 400) {
            err.response.data.errors.forEach((item) => {
              if (item.path === "otp") {
                setOtpError(item.msg);
              }
            });
          }
          if (err.response.status === 500) {
            toast.dismiss();
            toast.error(err.response.data.message);
          }
        });
    }
  );

  // Custom hook for OTP handling
  const { otpRefs, handleOtpChange, handleKeyDown, checkOtpErrors, markAllOtpFieldsTouched } = useOtpHandler(formik2);
  const { hasOtpError, otpErrorMessage } = checkOtpErrors();

  return (
    <div>
      {verifiedMobile ? (
        <form onSubmit={formik.handleSubmit}>
          <CustomInputField
            title="Enter Mobile Number"
            type="text"
            placeholder="Enter Mobile Number"
            name="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.mobile}
            touched={formik.touched.mobile}
            mobile={true}
          />
          <span className="text-red-500">{mobileError}</span>
          <div className="bold-sansation pt-5">
            <button disabled={loading} className="bg-custom-green text-white flex items-center  justify-center rounded-md w-full p-3 font-sansation font-regular ">{loading ? <ClipLoader color="white" size={20} /> : "VERIFY MOBILE NUMBER"}</button>
          </div>
        </form>
      ) : (
        <>
          <p className="mt-3 bold-sansation">Enter OTP</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              markAllOtpFieldsTouched();
              formik2.handleSubmit();
            }}
          >
            <div className="grid grid-cols-5 gap-3">
              {[...Array(5)].map((_, index) => (
                <OTP_InputField
                  key={index}
                  name={`otp${index + 1}`}
                  value={formik2.values[`otp${index + 1}`]}
                  onChange={(event) => handleOtpChange(index, event)}
                  onKeyDown={(event) => handleKeyDown(index, event)}
                  onBlur={formik2.handleBlur}
                  ref={(el) => (otpRefs.current[index] = el)}
                />
              ))}
            </div>
            {formik2.errors.otp1 || formik2.errors.otp2 || formik2.errors.otp3 || formik2.errors.otp4 || formik2.errors.otp5 ? (
              <div className="text-red-500 mt-3 text-sm">
                {Object.values(formik2.errors)[0] && <div>{Object.values(formik2.errors)[0]}</div>}
              </div>
            ) : (
              <span className="text-red-500">{otpError}</span>
            )}
            {hasOtpError && (
              <div className="text-red-500 mt-3 text-sm">
                {otpErrorMessage && <div>{otpErrorMessage}</div>}
              </div>
            )}
            <div className="bold-sansation pt-5">
              <button onClick={() => {
                formik2.handleSubmit();
              }} disabled={loading} className="bg-custom-green text-white flex items-center  justify-center rounded-md w-full p-3 font-sansation font-regular ">{loading ? <ClipLoader color="white" size={20} /> : "VERIFY OTP"}</button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default LoginWith_OTP;
