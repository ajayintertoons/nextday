import React from "react";
import deliveryboy from "../../images/deliveryboy.png";
import boxvector from "../../images/Vector (1).png";

const We_Offer = () => {
  // List of risk cover items to be displayed in the grid
  const data = [
    {
      title: "Risk Cover/ Risk Surcharge",
      description:
        "Aenean id mi fermentum, tristique felis condimentum augue. Pellentesque",
    },
    {
      title: "Risk Cover/ Risk Surcharge",
      description:
        "Aenean id mi fermentum, tristique felis condimentum augue. Pellentesque",
    },
    {
      title: "Risk Cover/ Risk Surcharge",
      description:
        "Aenean id mi fermentum, tristique felis condimentum augue. Pellentesque",
    },
  ];

  return (
    <>
      <div className="bg-[#0C1118] h-auto lg:h-[40rem] lg:p-0 xl:p-0 p-[0.535rem]">
        <div className="mx-0 sm:mx-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2t   ">
          {/* First grid column: Details */}
        
          <div className="grid-col-span-1   gap-2   m-10  pt-10 ">
            <div className="flex gap-2 justify-center items-center md:justify-start lg:justify-start xl:justify-start">
              <div>
                <div className="relative">
                  <hr className="w-[1.25rem] h-1 my-1 border-custom-green border-t-2 dark:border-custom-green ml-auto" />
                  <hr className="w-[2.5rem] h-1 my-1 border-custom-green border-t-2 dark:border-custom-green" />
                </div>
              </div>
              <div >
                <h1 className="text-custom-green font-sansation font-bold text-xl">
                  What We Offer
                </h1>
              </div>
            </div>
            <div className="text-custom-white text-4xl font-sansation font-bold pt-6 text-center md:text-start lg:text-start xl:text-start">
              <h1>We Provide Timely & Cost-Effective Delivery</h1>
            </div>

            {/* List of risk covering items */}
            <div className="gap-4 text-custom-white  ">
              {data?.map((item, index) => (
                <div key={index}>
                  <div className="flex gap-4 mt-5 justify-center items-center md:justify-start lg:justify-start xl:justify-start">
                    <div>
                      <img src={boxvector} alt="square box" className=""/>
                    </div>
                    <div className="w-full">
                      <h1 className="text-xl font-sansation font-bold">
                        {item.title}
                      </h1>
                      <p className="text-sm font-sansation font-regular">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  {index < data?.length - 1 && (
                    <hr className="border-custom-blue mt-5" />
                  )}
                </div>
              ))}
            </div>
            {/* List of risk covering items end */}
          </div>

          {/* Second grid column: Image */}
          <div className="grid col-span-1  ">
            <img src={deliveryboy} alt="Delivery boy" style={{objectFit:"contain",maxHeight:"660px"}}/>
          </div>
        </div>
      </div>
   
    
    </>
  );
};

export default We_Offer;
