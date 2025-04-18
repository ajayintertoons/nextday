// import React from "react";

// const OTP_InputField = ({ value, placeholder = "", onChange, onBlur, name }) => {
//   return (
//     <>
//     <div className="w-full flex items-center mt-2 p-2 border border-gray-300 rounded-lg focus-within:border-blue-500">
//       <input
//         type="text"
//         placeholder={placeholder}
//         value={value}
//         onChange={onChange}
//         onBlur={onBlur}
//         name={name}
//         maxLength="1" 
//         className="border-none text-center outline-none w-full font-sansation font-regular text-sm"
//         />
    
//     </div>


//         </>
//   );
// };

// export default OTP_InputField;



import React, { forwardRef } from "react";

const OTP_InputField = forwardRef(({ value, placeholder = "", onChange, onBlur, name ,onKeyDown }, ref) => {
  return (
    <div className="w-full flex items-center mt-2 p-3 border border-gray-300 rounded-lg focus-within:border-blue-500">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        name={name}
        // onFocus={onFocus}
        maxLength="1" 
        className="border-none text-center outline-none w-full font-sansation font-regular text-sm"
        ref={ref}
      />
    </div>
  );
});

export default OTP_InputField;

