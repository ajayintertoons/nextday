import React, { useContext } from "react";
import CustomInputField from "../components/input-field/CustomInput";
import Button from "../components/button/Button";
import logo from "../images/main-logo 1.png";
import { myContext } from "../utils/context_api/context";
import { useGlobalFormik } from "../utils/custom-hooks/formik-hook/useGlobalFormik";
import {
  registerInitialValues,
  registerSchema,
} from "../utils/validation-schema/auth-schema/authSchema";

const RegisterPage = () => {
  // setClickRegister is a state from myContext that will be used to
  // update the context state to indicate whether the "Register" action was clicked or not.
  const { setClickRegister } = useContext(myContext);

  //formik validation
  const formik = useGlobalFormik(
    registerInitialValues,
    registerSchema,
    (values) => {
      // console.log("Register Form submitted", values);
    }
  );

  return (
    <>
      {/* ------------------------ div for heading section ------------------------ */}
      <div className="grid grid-cols-2 gap-4 ">
        <div>
          <div className="flex">
            <p className="font-sansation font-regular ">Welcome to</p>
            <div className="w-[6rem] p-1">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <p className="bold-sansation text-4xl">Register</p>
        </div>
        <div className=" flex justify-end">
          <div>
            <p className="font-sansation font-regular "> Have an Account?</p>
            <p
              className="bold-sansation text-xl text-custom-green cursor-pointer"
              onClick={() => setClickRegister(false)} //changing the setClickRegister state here.
            >
              Login
            </p>
          </div>
        </div>
      </div>
      {/* ------------------------ div for heading section end ------------------------ */}

      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 ">
          <CustomInputField
            title="Enter Your Email ID"
            type="text"
            placeholder="Enter Your Email ID"
            name="email"
            isMandatory={true}
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
          />
          <div className="grid grid-cols-2 gap-3 ">
            <CustomInputField
              title="Enter Your Name"
              type="text"
              placeholder="Enter Your Name"
              name="name"
              isMandatory={true}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.name}
              touched={formik.touched.name}
            />

            <CustomInputField
              title="Phone Number"
              type="text"
              placeholder="Enter Phone Number"
              name="phoneNumber"
              isMandatory={true}
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.errors.phoneNumber}
              touched={formik.touched.phoneNumber}
            />
          </div>

          <CustomInputField
            title="Enter Your Password"
            type="text"
            placeholder="Enter Your Password"
            name="password"
            isMandatory={true}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.password}
            touched={formik.touched.password}
          />
        </div>
        <div className="bold-sansation pt-5">
          <Button buttonText="REGISTER" type="submit" className="w-full"  />
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
