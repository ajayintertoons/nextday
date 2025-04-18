import React from "react";

export const Button2 = ({ buttonText, className, onClick,type="button"}) => {
  return (
    <div>
      <button
        className={`flex items-center border justify-center rounded-md  font-sansation font-regular ${className}`}
        onClick={onClick}
        type={type}
      >
        <span className=" gap-2 p-3 ">{buttonText}</span>
      </button>
    </div>
  );
};

export default Button2;