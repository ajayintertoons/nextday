import React from "react";
import aeroplane from "../../images/aeroplane-baground.png";
import arrow from "../../images/arrow.png";
import box from "../../images/box.png";
import gift from "../../images/gift.png";
import { CgArrowLongRight } from "react-icons/cg";
import { HiArrowLongRight } from "react-icons/hi2";

const Working_Process = () => {
  // ------------- style for small round green circle ----------
  const centeredGreenCircleStyle = `
  absolute
  bottom-[-20px]
  left-[50%]
  translate-x-[-50%]
  w-[2rem]
  h-[2rem]
  rounded-full
  bg-custom-green
  flex
  justify-center
  items-center
  text-white
  font-sansation
  font-bold
  md:w-[3rem]
  md:h-[3rem]
  lg:w-[3rem]
  lg:h-[3rem]
  xl:w-[4rem]
  xl:h-[4rem]
`;
  // ------------- style for small round green circle end ----------

  // ------------- style for  round white circle  ---------------
  const centeredGrayCircleClasses = `
  rounded-full
  bg-custom-gray
  flex
  justify-center
  items-center
  relative
  max-w-[15rem]
  aspect-square
  md:max-w-[15rem]
  lg:max-w-[15rem]
  xl:max-w-[30rem]
`;
  // ------------- style for  round white circle  end ----------

  return (
    <>
      <div className=" ">
        {/* --------------------- container div -------------------- */}
        <div className="container mx-auto  pt-10 h-auto">
          {/* ------------------ component header ------------------ */}
          <div className=" grid grid-cols-1 container mx-auto ">
            <div className=" flex justify-center items-center ">
              <div className="flex items-center ">
                <div className="relative">
                  <hr className="w-[1.25rem] h-1 my-2 border-custom-green border-t-2 dark:border-custom-green ml-auto" />
                  <hr className="w-[2.5rem] h-1 my-2 border-custom-green border-t-2  dark:border-custom-green" />
                </div>
                <div className="m-4">
                  <h1 className="text-custom-green bold-sansation text-xl ">
                    Working Process
                  </h1>
                </div>
              </div>
              <div className="relative">
                <hr className="w-[1.25rem] h-1 my-2 border-custom-green border-t-2  dark:border-custom-green " />
                <hr className="w-[2.5rem] h-1 my-2 border-custom-green border-t-2  dark:border-custom-green" />
              </div>
            </div>
          </div>
          {/* ------------------ component header end ------------------ */}

          {/* ------------------------ component head ------------------------- */}
          <div className="grid grid-cols-1 container mx-auto ">
            <div className="text-center text-4xl  ">
              <h1 className="bold-sansation">Working Process For Services</h1>
            </div>
          </div>
          {/* ------------------------ component head ------------------------- */}

          {/* ------------------- Contents inside the rounded div ------------------ */}
          <div className="grid place-items-center px-5 mx-5 h-auto">
            <div className="container mx-auto ">
              <div
                style={{
                  background: `url(${aeroplane}) center/contain no-repeat`,
                  minHeight: "70vh",
                  position: "relative",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}

              >
                <div
                  style={{
                    // position: "absolute",
                    // top: "50%",
                    // left: "50%",
                    // transform: "translate(-50%, -50%)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="w-full h-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 md:gap-10 ">
                    <div className=" md:grid-col-span-1 lg:grid-col-span-1 xl:grid-col-span-1">
                      <div className={centeredGrayCircleClasses}>
                        <div className="flex flex-col justify-center items-center p-[0.535rem] gap-2">
                          <img
                            src={arrow}
                            alt="yourImage"
                            style={{ width: "20%", height: "auto" }}
                          />
                          <h1 className="bold-sansation">First Mile</h1>
                          <p className="text-center px-3 text-custom-blue">
                            Pellentesque in ipsum id Orci porta dapibus.ipsum id Orci porta dapibus
                          </p>
                        </div>
                        <div className={centeredGreenCircleStyle}>01</div>
                      </div>
                    </div>

                    <div className="  md:grid-col-span-1 md:grid-col-span-1 lg:grid-col-span-1 xl:grid-col-span-1">
                      <div className={centeredGrayCircleClasses}>
                        <div className="flex flex-col justify-center items-center p-[0.535rem] gap-2">
                          <img
                            src={box}
                            alt="yourImage"
                            style={{ width: "20%", height: "auto" }}
                          />
                          <h1 className="bold-sansation">Mid Mile</h1>
                          <p className="text-center text-custom-blue">
                            Pellentesque in ipsum id Orci porta dapibus.ipsum id Orci porta dapibus
                          </p>
                        </div>
                        <div className={centeredGreenCircleStyle}>02</div>
                      </div>
                    </div>

                    <div className=" md:grid-col-span-1 md:grid-col-span-1 lg:grid-col-span-1 xl:grid-col-span-1 mt-2">
                      <div className={centeredGrayCircleClasses}>
                        <div className="flex flex-col justify-center items-center p-[0.535rem] gap-2">
                          <img
                            src={gift}
                            alt="arrow"
                            style={{ width: "25%", height: "auto" }}
                          />
                          <h1 className="bold-sansation ">Delivery</h1>
                          <p className="text-center text-custom-blue mb-4">
                            Pellentesque in ipsum id Orci porta dapibus.ipsum id Orci porta dapibus
                          </p>
                        </div>
                        <div className={centeredGreenCircleStyle}>03</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ------------------- Contents inside the rounded div end ------------------ */}
        </div>
        {/* --------------------- container div end  -------------------- */}
      </div>

      {/* ---------------------- operating system container ---------------------- */}

      <div className="bg-custom-black  text-center p-10  mt-10">
        <div className="container mx-auto  m-10">
          <h1 className="text-custom-white text-3xl font-sansation font-regular">
            Experience the{" "}
            <span className="bold-sansation">operating system</span> for
            commerce in India
          </h1>

          <div>
            <h1 className="text-custom-white font-sansation font-light">
              Sign up now to start shipping with Next Day
            </h1>
          </div>

          <div className=" flex justify-center  gap-5  mt-5">
            <div className=" w-full flex justify-end ">
              <button className="bg-custom-white flex items-center justify-center p-2 lg:p-2 xl:p-2 md:w-1/2 lg:w-1/2 xl:1/2  rounded-md text-custom-blue gap-2 font-sansation font-regular ">
                Personal Courier
                <HiArrowLongRight className="text-xl" />
              </button>
            </div>
            <div className=" w-full ">
              <button className="bg-custom-white flex items-center justify-center  p-2 lg:p-2 xl:p-2 md:w-1/2 lg:w-1/2 xl:1/2    rounded-md text-custom-blue gap-2 font-sansation font-regular font-regular ">
                Business Shipments
                <HiArrowLongRight className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ operating system container end ----------------- */}
    </>
  );
};

export default Working_Process;
