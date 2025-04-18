
import React from "react";

const Button = ({ buttonText, className, icon, onClick, type = "button" }) => {
  return (
    <button
      type={type} // Add type prop here
      className={`${className} bg-custom-green text-white flex items-center  justify-center rounded-md px-2 font-sansation font-regular `}
      onClick={onClick}
    >
      <span className={`flex items-center gap-2 p-3 ${!buttonText ? 'justify-center' : ''}`}>
        {buttonText ? (
          <>
            <span>{buttonText}</span>
            {icon && <span className="flex-shrink-0">{icon}</span>}
          </>
        ) : (
          <span className="flex-shrink-0">{icon}</span>
        )}
      </span>
    </button>
  );
};

export default Button;


