import React, { useContext, useState } from "react";
import CustomInputField from "../components/input-field/CustomInput";
import Button from "../components/button/Button";
import OTP_InputField from "../components/input-field/OTP_InputField";
import { useGlobalFormik } from "../utils/custom-hooks/formik-hook/useGlobalFormik";
import { useOtpHandler } from "../utils/custom-hooks/otp-handler/otpHandler";
import { myContext } from "../utils/context_api/context";
import logo from "../images/main-logo 1.png";
import {
  forgotPasswordMobileInitialValues,
  forgotPasswordMobileSchema,
  forgotPasswordOTPInitialValues,
  forgotPasswordOTPSchema,
} from "../utils/validation-schema/auth-schema/authSchema";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import request from '../utils/request';

const ForgotPassword = () => {
  const [otpError, setOtpError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [verifiedMobile, setVerifiedMobile] = useState(false);
  const navigate = useNavigate();
  const {
    setClickRegister,
    setClickForgotPassword,
    setIsLoginModalOpen,
  } = useContext(myContext);

  const formik = useGlobalFormik(
    forgotPasswordMobileInitialValues,
    forgotPasswordMobileSchema,
    (values) => {
      localStorage.setItem("forgotPasswordMobile", values.mobile);
      setMobileError('');
      request({
        url: 'V1/sendotp',
        method: 'POST',
        data: {
          "mobile": values.mobile,
          "type": "forgotpassword",
          "usertype": "Customer"
        }
      })
        .then((response) => {
          if (response.data.length > 0) {
            toast.dismiss();
            toast.success(response.data[0].message);
            setVerifiedMobile(true);
          }
        })
        .catch((err) => {
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

  const formik2 = useGlobalFormik(
    forgotPasswordOTPInitialValues,
    forgotPasswordOTPSchema,
    (values) => {
      setPasswordError('');
      setOtpError('');
      request({
        url: 'V1/resetpassword',
        method: 'POST',
        data: {
          "mobile": localStorage.getItem('forgotPasswordMobile'),
          "usertype": "Customer",
          "password": values.password,
          "otp": values.otp1 + values.otp2 + values.otp3 + values.otp4 + values.otp5
        }
      })
        .then((response) => {
          if (response.data.length > 0) {
            setIsLoginModalOpen(false);
            setVerifiedMobile(false);
            setClickForgotPassword(false);
            toast.dismiss();
            toast.success(response.data[0].message);
            localStorage.removeItem('forgotPasswordMobile');
            navigate('/');
          }
        })
        .catch((err) => {
          if (err.response?.status === 400) {
            err.response.data.errors.forEach((item) => {
              if (item.path === "otp") {
                setOtpError(item.msg);
              } else if (item.path === 'password') {
                setPasswordError(item.msg);
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

  const { otpRefs, handleOtpChange, handleKeyDown, checkOtpErrors } = useOtpHandler(formik2);
  const { hasOtpError, otpErrorMessage } = checkOtpErrors();

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex">
            <p className="font-sansation font-regular">Welcome to</p>
            <div className="w-[6rem] p-1">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <p className="bold-sansation text-2xl">Forgot Password</p>
        </div>
        <div className="flex justify-end">
          <div>
            <p className="font-sansation font-regular">Remembered your password?</p>
            <p
              className="bold-sansation text-xl text-custom-green cursor-pointer"
              onClick={() => {
                setClickForgotPassword(false);
                setClickRegister(false);
              }}
            >
              Login
            </p>
          </div>
        </div>
      </div>
      {verifiedMobile ? (
        <>
          <form onSubmit={formik2.handleSubmit}>
            <p className="mt-3 bold-sansation">Enter OTP</p>
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
                {Object.values(formik2.errors)[0] && <div>OTP is required</div>}
              </div>
            ) : (
              <span className="text-red-500">{otpError}</span>
            )}
            {hasOtpError && (
              <div className="text-red-500 mt-3 text-sm">
                {otpErrorMessage && <div>{otpErrorMessage}</div>}
              </div>
            )}
            <CustomInputField
              title="Enter New Password"
              type="password"
              placeholder="Enter New Password"
              name="password"
              value={formik2.values.password}
              onChange={formik2.handleChange}
              onBlur={formik2.handleBlur}
              error={formik2.errors.password}
              touched={formik2.touched.password}
              isMandatory={true}
            />
            <span className="text-red-500">{passwordError}</span>
            <div className="bold-sansation pt-5">
              <Button buttonText="VERIFY OTP" type="submit" className="w-full" />
            </div>
          </form>
        </>
      ) : (
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
            isMandatory={true}
          />
          <span className="text-red-500">{mobileError}</span>
          <div className="bold-sansation pt-5">
            <Button buttonText="SUBMIT" type="submit" className="w-full" />
          </div>
        </form>
      )}
    </>
  );
};

export default ForgotPassword;
