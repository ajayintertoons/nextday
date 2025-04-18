import { createContext, useState } from "react";

//!!!!!!!!!!!!!!! DESCRIPTION !!!!!!!!!!!!!!!!!!!!

// ** touched,setTouched state
// This state is used to control the error display on the Login with OTP page.
// It shows the OTP error message when the OTP field has been touched.

// ** clickRegister, setClickRegister
//User clicks or does not click the register button on the login page.

// ** clickForgotPassword, setClickForgotPassword
//User clicks or does not click the forgot password button on the login page.

// ** consignerModalOpen, setConsignerModalOpen
//User clicks or does not click the consigner modal  button on the create pickup page.


export const myContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [clickRegister, setClickRegister] = useState(false);
  const [clickForgotPassword, setClickForgotPassword] = useState(false);
  const [consignerModalOpen, setConsignerModalOpen] = useState(false);
  const [consigneeModalOpen, setConsigneeModalOpen] = useState(false);
  const [touched, setTouched] = useState(false);
  const [verifiedMobile, setVerifiedMobile] = useState(false);
  const [verifiedOTP, setVerifiedOTP] = useState(false);
  const [userType,setUserType] = useState('')


  const token = localStorage.getItem("token");
  // const [login, setLogin] = useState(!!token);
  const [isLogin, setIsLogin] = useState(false);
  const [userData,setUserData] = useState()
  const [addressList, setAddressList] = useState([])

  const contextValue = {
    isLoginModalOpen,
    setIsLoginModalOpen,
    clickRegister,
    setClickRegister,
    clickForgotPassword,
    setClickForgotPassword,
    consignerModalOpen,
    setConsignerModalOpen,
    consigneeModalOpen,
    setConsigneeModalOpen,
    isLogin,
    setIsLogin,
    touched,
    setTouched,
    verifiedMobile,
    setVerifiedMobile,
    verifiedOTP,
    setVerifiedOTP,
    userData,
    setUserData,
    addressList,
    setAddressList,
    userType,
    setUserType
  };

  // console.log("context value",contextValue)

  return (
    <myContext.Provider value={contextValue}>{children}</myContext.Provider>
  );
};
