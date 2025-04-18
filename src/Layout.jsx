import React, { useContext } from "react";
import { Outlet,useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { myContext } from "./utils/context_api/context";

const Layout = () => {
  const { isLogin } = useContext(myContext);

  const location = useLocation(); 
  const isRootPath = location.pathname === "/";

  return (
    <>
      <div>{!isRootPath && isLogin && <Navbar />}</div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
