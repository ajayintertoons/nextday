

import React from "react";

// Define an array of steps
const steps = [
  {
    id: 1,
    icon: "1",
    bgColor: "bg-gray-100 dark:bg-custom-gray",
  },
  {
    id: 2,
    icon: "2",
    bgColor: "bg-gray-100 dark:bg-custom-gray",
  },
  {
    id: 3,
    icon: "3",
    bgColor: "bg-gray-100 dark:bg-custom-gray",
  },
];

const Stepper = ({ currentStep, finalContent }) => {
  return (
    <div className="p-4 mt-2">
      {/* Stepper Nav */}
      <div className="flex items-center w-full lg:w-3/5 gap-4 font-sansation font-regula">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <span
              className={`flex items-center justify-center w-5 h-5 rounded-full lg:h-7 lg:w-7 shrink-0 ${
                currentStep >= step.id ? "bg-custom-orange text-white" : step.bgColor
              }`}
            >
              {step.icon}
            </span>
            {index < steps.length - 1 && (
              <div className="flex h-2 w-full  lg:w-1/6 items-center">
                <div
                  className={`flex-1 h-full rounded-l-md ${
                    currentStep > step.id ? "bg-custom-orange " : "bg-gray-200"
                  }`}
                />
                <div
                  className={`flex-1 h-full rounded-r-md ${
                    currentStep > step.id ? "bg-custom-orange " : "bg-gray-200"
                  }`}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;

