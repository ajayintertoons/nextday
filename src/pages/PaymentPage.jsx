import React, { useState } from "react";
import creditCard from "../images/creditcard.png";
import creditCard2 from "../images/creditCard2.png";
import CustomInputField from "../components/input-field/CustomInput";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import CostSummary from "../components/cost-summary/CostSummary";

const PaymnetPage = () => {
  const [selectedpaymentOptions, setSelectedpaymentOptions] = useState("");

  const paymentOptions = [
    { id: "creditCard", label: "Credit Card" },
    { id: "upi", label: "UPI" },
    { id: "netBanking", label: "Net Banking" },
    { id: "paypal", label: "PayPal" },
  ];

  const handleOptionClick = (id) => {
    setSelectedpaymentOptions(id);
  };

  const items = [
    { label: "Shipping Cost", value: "₹1840.00" },
    { label: "Shipping Tax", value: "₹87.00" },
    { label: "Discount", value: "₹1840.00" },
  ];

  const total = "₹5874.00";

  // for calender
  const [monthVisible, setMonthVisible] = useState(false);
  const [yearVisible, setYearVisible] = useState(false);

  // Toggle functions for each calendar
  const toggleMonthCalendar = () => setMonthVisible(!monthVisible);
  const toggleYearCalendar = () => setYearVisible(!yearVisible);

  return (
    <>
      <div className="container mx-auto mt-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-4">
          <div className="grid  col-span-8  border-2 p-5 rounded-md ">
            <p className="bold-sansation text-xl">SELECT PAYMENT METHOD</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5">
              {paymentOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleOptionClick(option.id)}
                  className={`flex gap-3 text-sm font-sansation cursor-pointer font-regular items-center p-3 justify-center border rounded-md
            ${selectedpaymentOptions === option.id
                      ? "bg-custom-green text-white"
                      : "bg-white text-black"
                    }
            transition-colors duration-200`}
                >
                  <div className="w-1/4">
                    <img
                      src={
                        selectedpaymentOptions === option.id
                          ? creditCard2
                          : creditCard
                      }
                      alt={option.label}
                    />
                  </div>
                  <p>{option.label}</p>
                </div>
              ))}
            </div>
            <CustomInputField
              title="NAME ON CARD"
              type="text"
              placeholder=""
            //   value={}
            //   onChange={}
            />
            <CustomInputField
              title="CARD NUMBER"
              type="text"
              placeholder=""
            //   value={}
            //   onChange={}
            />

            <div className="grid grid-cols-3  gap-3">
              <div className="mt-3">
                <p className="bold-sansation">MONTH</p>
                <div className="border rounded-md py-2 mt-2">
                  <div className="flex items-center justify-center">
                    <input
                      type="month"
                      className={`outline-none ${monthVisible ? "" : "hidden"}`}
                      onFocus={() => setMonthVisible(true)}
                      onBlur={() => setMonthVisible(false)}
                    />
                    <div className="ml-2">
                      {monthVisible ? (
                        <IoIosArrowUp onClick={toggleMonthCalendar} />
                      ) : (
                        <div className="flex items-center gap-3">
                          <p>Select Month</p>
                          <IoIosArrowDown onClick={toggleMonthCalendar} />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="mt-3">
                  <p className="bold-sansation">YEAR</p>
                  <div className="border rounded-md py-2 mt-2">
                    <div className="flex items-center justify-center">
                      <input
                        type="month"
                        className={`outline-none ${yearVisible ? "" : "hidden"
                          }`}
                        onFocus={() => setYearVisible(true)}
                        onBlur={() => setYearVisible(false)}
                      />
                      <div className="ml-2">
                        {yearVisible ? (
                          <IoIosArrowUp onClick={toggleYearCalendar} />
                        ) : (
                          <div className="flex items-center gap-3">
                            <p>Select Year</p>
                            <IoIosArrowDown onClick={toggleYearCalendar} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <CustomInputField
                  title="CVV"
                  type="text"
                  placeholder=""
                //   value={}
                //   onChange={}
                />
              </div>
            </div>
          </div>
          <div className="grid col-span-4  ">
            <div className="grid grid-rows-2 ">
              <div className="border rounded-md  px-5">
                <CostSummary items={items} total={total} />
              </div>
              <div>
                <div className="flex justify-center border rounded-md mt-5 p-3 bg-[#CAFFE9] cursor-pointer">
                  <p className="bold-sansation text-custom-green ">PAY NOW</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymnetPage;
