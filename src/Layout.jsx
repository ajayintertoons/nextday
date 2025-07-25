import React, { useContext, useEffect } from "react";
import { Outlet,useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { myContext } from "./utils/context_api/context";

const Layout = () => {
  const { isLogin } = useContext(myContext);

  const location = useLocation(); 
  const isRootPath = location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <div>{!isRootPath  && <Navbar />}</div>
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
