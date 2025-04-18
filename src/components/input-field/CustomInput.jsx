import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const CustomInputField = ({
  title,
  type,
  placeholder,
  unit,
  value,
  onChange,
  readOnly = false,
  onBlur,
  name,
  showForgotPassword = false,
  rows,
  className = "",
  onFocus,
  clickForgotPassword,
  error,
  touched,
  ref,
  accept,
  mobile = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const InputElement = rows ? "textarea" : "input";
  const isPassword = type === "password";

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Set today's date as the default for datetime-local input with 00:00 time
  const [dateTimeValue, setDateTimeValue] = useState("");
  const [maxDateTimeValue, setMaxDateTimeValue] = useState("");
  const [minDateTimeValue,setMinDateTimeValue] = useState("");
  
  
  const handleDateTimeChange = (event) => {
    // Only update the time part of the date-time input value
    const currentDate = dateTimeValue.split("T")[0]; // Today's fixed date
    const newTime = event.target.value.split("T")[1]; // New time
    setDateTimeValue(`${currentDate}T${newTime}`);
    onChange(event);
  };

  return (
    <div className="pt-3">
      <div className="flex justify-between">
        <h5 className="font-sansation font-regular text-md">
          {title} {unit && <span className="text-[#C00000]">({unit})</span>}
        </h5>
        {showForgotPassword && (
          <p
            className="font-sansation font-regular text-custom-green ml-2 cursor-pointer"
            onClick={clickForgotPassword}
          >
            Forgot Password?
          </p>
        )}
      </div>
      <div
        className={`w-full flex items-center mt-2 p-3 border border-gray-300 rounded-lg focus-within:border-blue-500 bg-custom-white ${className}`}
      >
        {mobile && <span className="font-sansation font-regular text-md">+91&nbsp;</span>}
        <InputElement
          autoComplete="off"
          type={
            type === "number"
              ? "number"
              : type === "datetime-local"
              ? "datetime-local"
              : isPassword && !showPassword
              ? "password"
              : "text"
          }
          placeholder={placeholder}
          value={type === "datetime-local" ? dateTimeValue : value} 
          onChange={type === "datetime-local" ? handleDateTimeChange : onChange}
          onBlur={onBlur}
          name={name}
          rows={rows}
          onFocus={onFocus}
          className="outline-none w-full font-sansation font-regular border-none text-md"
          ref={ref}
          accept={accept}
           min={minDateTimeValue} // Disable dates before today
          max={maxDateTimeValue} // Disable future times
          readOnly={readOnly}
        />
        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="ml-2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        )}
      </div>
      {touched && error && (
        <div className="text-red-500 mt-1 text-sm">{error}</div>
      )}
    </div>
  );
};

export default CustomInputField;
