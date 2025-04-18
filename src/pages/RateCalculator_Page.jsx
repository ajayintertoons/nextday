import React from "react";
import { useState } from "react";
import calculation from "../images/Rectangle 346258245.png";
import Dropdown from "../components/input-field/Dropdown";
import CustomInput from "../components/input-field/CustomInput";
import CustomInputField from "../components/input-field/CustomInput";
import UnitField from "../components/input-field/UnitField";
import Button from "../components/button/Button";
import { RxCross2 } from "react-icons/rx";

const RateCalculator_Page = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleSelect = (option) => setSelectedOption(option);
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

 

 

  return (
    <>
      {/* ------------------------ main container --------------------- */}
      <div className="">
      {/* first row */}
      <div
        className="bg-cover bg-no-repeat md:my-10 lg:p-5 lg:m-10 "
        style={{ backgroundImage: `url(${calculation})` }}
      >
        <div className=" p-20 bold-sansation text-custom-white">
          <h2 className="text-4xl ">
            <span className="text-custom-green ">FASTER</span> THAN YOU IMAGINE
          </h2>
          <p>Shipping Cost Calculator</p>
        </div>           
      </div>

      {/* second row */}
      <div className=" sm:m-5 md:m-10 lg:m-0 xl:m-0 ">
        <div
          className="container mx-auto rounded-xl  shadow-md border border-custom-gray bg-custom-white"
          style={{ marginTop: "-6rem" }}
        >
          {/* parent grid */}
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4  m-10 ">
            <div className="mt-3">
              <div className="relative">
              <Dropdown
            title="Pickup for"
            options={options}
            placeholder="Select"
            value={selectedOption}
            onChange={handleSelect}
          />
              </div>
            </div>

            <div>
              <CustomInputField
                title="Pickup Pincode"
                placeholder="Enter Pincode"
                //   value={}
                //   onChange={}
              />
            </div>

            <div>
              <CustomInputField
                title="Delivery Pincode"
                placeholder="Enter Pincode"
                //   value={}
                //   onChange={}
              />
            </div>

            <div className="mt-2">
              <CustomInputField
                title="Approximate Dead Weight"
                placeholder="Enter Weight of Package in Kgs"
                unit="KG"
                // value={}
                //   onChange={}
              />
            </div>

            {/* ======================== xxxxxxxxxxxxxx */}
            <div className="col-span-2">
              <div className="flex flex-wrap gap-5 items-end  mt-5">
                <div className="flex-1 min-w-[9.375rem] ">
                  <h5 className="font-sansation font-regular">Package Dimensions</h5>
                  <div className="pt-2">
                    <UnitField
                      placeholder="Length"
                      unit="CM"
                      unitClassName="text-sm"
                    />
                  </div>
                </div>

                <RxCross2 className="mb-3 sm:hidden md:block" />
                <div className="flex-1 min-w-[9.375rem]">
                  <div className="pt-2">
                    <UnitField
                      placeholder="Width"
                      unit="CM"
                      unitClassName="text-sm"
                    />
                  </div>
                </div>
                <RxCross2 className="mb-3" />
                <div className="flex-1 min-w-[9.375rem]">
                  <div className="pt-2">
                    <UnitField
                      placeholder="Height"
                      unit="CM"
                      unitClassName="text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ======================== xxxxxxxxxxxxxx */}

            <div>
              <CustomInputField
                title="Volumetric Weight"
                placeholder="Volumetric Weight"
                unit="KG"
                // value={}
                //   onChange={}
              />
            </div>

            <div className="mt-1">
              <h5 className="font-sansation font-regular pt-2">Shipping Dangerous Goods</h5>
              <div className="flex pt-2 items-end  gap-4">
                <label className="flex items-center font-sansation font-regular">
                  <input
                    type="radio"
                    name="dangerousGoods"
                    value="yes"
                    className="m-2 w-5 h-5 cursor-pointer"
                  />
                  Yes
                </label>
                <label className="flex items-center font-sansation font-regular">
                  <input
                    type="radio"
                    name="dangerousGoods"
                    value="no"
                    className="m-2 w-5 h-5 cursor-pointer"
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <CustomInputField
                title="Enter Order Value"
                placeholder="Enter Order Value"
                // value={}
                //   onChange={}
              />
            </div>

            <div className="flex items-end justify-between">
              <label className="flex items-center font-sansation font-regular ">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  className="m-2 w-5 h-5 cursor-pointer"
                />
                Cash On Delivery
              </label>
              <label className="flex items-center font-sansation font-regular">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Prepaid"
                  className="m-2 w-5 h-5 cursor-pointer"
                />
                Prepaid
              </label>
            </div>
            <div className="col-span-2"></div>
            <div className="bold-sansation">
              <Button buttonText="Calculate" className="w-full" />
            </div>
          </div>

          {/* xxxxxxxxxx */}
        </div>
      </div>
      </div>
      <div className="lg:mb-10"></div>

      {/* ------------------------ main container end --------------------- */}
    </>
  );
};

export default RateCalculator_Page;
