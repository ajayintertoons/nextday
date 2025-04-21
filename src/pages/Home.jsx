import React, { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoMdCloseCircle } from "react-icons/io";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      {/* ----------------------- main container div -------------------- */}
      <div className="container mx-auto px-5 pt-[116px] lg:pt-[0px]">
        {/* grid container */}
        <div className=" flex justify-end m-5 cursor-pointer text-3xl ">
          <div className=" md:block sm:block lg:hidden">
            {!isClicked ? (
              <>
                <IoMenu onClick={() => setIsClicked(true)} />
              </>
            ) : (
           ""
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 lg:gap-4  xl:gap-5 ">
          {/* left side div */}

          {isClicked ? (
            <>
              <div className="  bg-[#F1F5FF ]">
              <div className=" flex text-3xl py-2 cursor-pointer justify-end lg:hidden ">
                <IoMdCloseCircle onClick={() => setIsClicked(false)} />
              </div>
                <Sidebar />
              </div>
            </>
          ) : (
            <div className="hidden lg:block xl:block sticky top-10  z-20  ">
                <Sidebar />
              </div>
          )}

          {/* right side div */}
          <div className="lg:col-span-3 xl:col-span-3 ">
            <Outlet />
          </div>
        </div>
        {/* grid container end */}
      </div>
      {/* ----------------------- main container div end-------------------- */}
    </>
  );
};

export default Home;
