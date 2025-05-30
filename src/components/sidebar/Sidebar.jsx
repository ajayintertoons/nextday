
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import profilePhoto from "../../images/profilePhoto.png";
import { myContext } from "../../utils/context_api/context";
import { CUSTOMER_PROFILE } from "../../../config";
import LogOutModal from "../Modals/LogOutModal";
// import { useSelector } from "react-redux";
// import { selectAuthdata } from "../../slices/authSlice";

const Sidebar = () => {
  const { setIsLogin, userData, setUserData, userType } = useContext(myContext);
  const [isOpen, setIsOpen] = useState(false);
  const [logOutConfirm, setLogOutConfirm] = useState(false);
  // const authInfo = useSelector(selectAuthdata)
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    sessionStorage.clear();
    localStorage.clear();
    setLogOutConfirm(false);
    setIsOpen(false);
    setIsLogin(false);
    navigate("/");  
  };

  const sidebarData = [
    { id: "dashboard", label: "Dashboard", path: "customer/dashboard" },
    { id: "myBookings", label: "My Bookings", path: "customer/my-bookings" },
    { id: "sheduledPickups", label: "Sheduled Pickups", path: "customer/scheduled-pickups" },
    {
      id: "createRecurringPickup",
      label: "Create Recurring Pickup",
      path: "customer/create-recurring-pickup",
    },
    { id: "listRecurringPickup", label: "Recurring Pickups", path: "customer/list-recurring-pickup" },
    { id: "myprofile", label: "My Profile", path: "customer/my-profile" },
    { id: "changePassword", label: "Change Password", path: "customer/change-password" },
    // {id:"pincodeFinder", label:"Pincode Finder", path:"customer/pincode-finder"},
    // { id: "helpFaqs", label: "Help / FAQs", path: "customer/help-faqs" },
    { id: "logout", label: "Logout", path: "/" }, 
  ];

  const handleClose = ()=>{
    setLogOutConfirm(false);
    setIsOpen(false);
  }
  const handleConfirm =()=>{
    setLogOutConfirm(true);
  }

  useEffect(()=>{
    if(isOpen && logOutConfirm){
      handleLogout();
    }
  },[isOpen,logOutConfirm])

  return (
    <>
      <LogOutModal isOpen={isOpen} onClose={handleClose} onConfirm={handleConfirm} title="Log Out" message="Are you sure you want to logout ?" />
      <div className="grid p-5 bg-[#F1F5FF]  font-sansation font-regular rounded-md ">
        <div className="grid grid-cols-1 bg-custom-white ">
          <div className="grid grid-cols-3 p-2 ">
            <div className="w-3/5 justify-self-center ">
              <img
                src={
                  userData?.logoPath?.startsWith('data:image') // base64 case
                    ? userData.logoPath
                    : userData?.logoPath?.startsWith('http') // full URL case
                      ? userData.logoPath
                      : userData?.logoPath // filename only
                        ? `${CUSTOMER_PROFILE}${userData.logoPath}`
                        : profilePhoto // fallback default
                }
                alt="profile photo"
                className="rounded-full h-[45px] object-cover "
                width="45px"
              />
            </div>
            <div className="col-span-2 grid items-center">
              <p className="text-xs">Welcome back</p>
              <h5 className="text-sm bold-sansation">{userData?.fullName}</h5>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 py-5">
          <div>
            <ul className="space-y-2">
              {sidebarData.map((item) => (
                <li key={item.id}>
                  {item.id === "logout" ? (
                    <button
                      onClick={()=>setIsOpen(true)}
                      className="block w-full h-full p-2 text-left cursor-pointer "
                    >
                      {item.label}
                    </button>
                  ) : (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block w-full h-full p-2 ${isActive ? "bg-custom-green text-white" : ""
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
