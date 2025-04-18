// useOtpHandler.js
import { useRef } from 'react';

export const useOtpHandler = (formik) => {
  const otpRefs = useRef([]);

  const handleOtpChange = (index, event) => {
    const { value } = event.target;
    const newValue = value.slice(-1); // Ensure only the last character is considered

    // Update formik values
    formik.setFieldValue(`otp${index + 1}`, newValue);

    // Move to the next field if current value is entered
    if (newValue && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !event.target.value) {
      if (index > 0) {
        otpRefs.current[index - 1].focus(); // Move to the previous field
      }
    }
  };

  const markAllOtpFieldsTouched = () => {
    otpRefs.current.forEach((ref) => ref?.focus()); // Optionally focus all fields
  };

  const checkOtpErrors = () => {
    // Your existing error checking logic
    return { hasOtpError: false, otpErrorMessage: '' };
  };

  return {
    otpRefs,
    handleOtpChange,
    handleKeyDown,
    checkOtpErrors,
    markAllOtpFieldsTouched,
  };
};



// import { useRef } from "react";

// export const useOtpHandler = (formik) => {
//   const otpRefs = useRef([]);

//   const handleOtpChange = (index, event) => {
//     const { value } = event.target;
//     formik.setFieldValue(`otp${index + 1}`, value);

//     // Move to the next input if the current input is filled
//     if (value && index < otpRefs.current.length - 1) {
//       otpRefs.current[index + 1].focus();
//     }

//     // Mark field as touched to trigger validation
//     formik.setFieldTouched(`otp${index + 1}`, true);
//   };

//   // Check for OTP errors in the formik state
//   const checkOtpErrors = () => {
//     const hasOtpError = Object.keys(formik.errors).some((key) => key.startsWith("otp") && formik.touched[key] && error);

//     const otpErrorMessage = hasOtpError ? "Please fill all OTP fields" : "";
//     return { hasOtpError, otpErrorMessage };
//   };

//   return { otpRefs, handleOtpChange, checkOtpErrors };
// };
