  import React, { useState } from "react";
  import truck from "../images/truck.png";
  import Button from "../components/button/Button";
  import { FaPlus } from "react-icons/fa6";
  import trackLocation from "../images/track-location.png";
  import trackLocation2 from "../images/track-location2.png";

  const TrackingPage = () => {
    // Keep track of the index of the currently opened item
    const [openIndex, setOpenIndex] = useState(null);

    const trackingProcess = [
      {
        title: "Consignment Booked",
        description: "Phasellus placerat dui sed metus luctus, vel hendrerit",
      },
      {
        title: "Processing bag for Edappaly hub",
        description: "Phasellus placerat dui sed metus luctus, vel hendrerit",
      },
      {
        title: "Consignment Arrived at Edappaly hub",
        description: "Phasellus placerat dui sed metus luctus, vel hendrerit",
      },
      {
        title: "Processing bag for Banglore hub",
        description: "Phasellus placerat dui sed metus luctus, vel hendrerit",
      },
      {
        title: "Arrived at destination",
        description: "Phasellus placerat dui sed metus luctus, vel hendrerit",
      },
      {
        title: "Out for delivery",
        description: "Phasellus placerat dui sed metus luctus, vel hendrerit",
      },
      {
        title: "Delivered with signature",
        description: "Phasellus placerat dui sed metus luctus, vel hendrerit",
      },
    ];

    const handleToggleDescription = (index) => {
      // If the same index is clicked, close the item, otherwise open the new one
      setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
      <>
        <div className="m-5 mt-10">
          <div className="container mx-auto rounded-xl shadow-md border border-custom-gray">
            <div className="grid grid grid-rows-1 p-[0.535rem]">
              {/* first row */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-8 md:lg:grid-cols-8 items-center gap-4 ">
                <div className="lg:col-span-1 sm:col-span-2 ">
                  <img src={truck} alt="truck" />
                </div>
                <div className="col-span-2 bold-sansation ">
                  <h5 className="text-[#B0B0B0]">AWB Number</h5>
                  <p>EV-2017003323</p>
                </div>
                <div className="sm:col-span-1 lg:col-span-2 ">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center w-[2.5rem]">
                      <img src={trackLocation2} alt="tracking-location" />
                    </div>
                    <div className="bold-sansation">
                      <h5>Edappally, Ernakulam</h5>
                      <p className="text-[#B0B0B0] text-[0.7rem]">
                        Rd. Santa Ana, Illinois 85486
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 bold-sansation">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center w-[2.5rem]">
                      <img src={trackLocation} alt="tracking-location" />
                    </div>
                    <div>
                      <h5>Parali, Palakkad</h5>
                      <p className="text-[#B0B0B0] text-[0.7rem]">
                        Rd. Inglewood, Maine 98380
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <Button
                    buttonText="Delivered"
                    className="bg-[#049535] w-full rounded-lg bold-sansation"
                  />
                </div>
              </div>

              <hr className="border-#808080 mt-5" />

              {/* second row */}
              <div className="grid">
                {trackingProcess.map((item, index) => (
                  <div className="flex gap-3 py-1" key={index}>
                    <div
                      className="w-6 h-6 bg-[#D9D9D9] flex justify-center items-center cursor-pointer"
                      onClick={() => handleToggleDescription(index)}
                    >
                      <FaPlus />
                    </div>
                    <div>
                      <p className="bold-sansation">{item.title}</p>
                      {openIndex === index && (
                        <p className="font-sansation font-regular">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default TrackingPage;
