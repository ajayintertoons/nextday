// import React from "react";


// const UnitField = ({
//   placeholder,
//   unit,
//   className,
//   unitClassName,
//   onChange,
//   value,
//   onBlur,
//   name,
//   error,
//   touched,
// }) => {
//   return (
//     <>
  
//       <div className={`flex border focus-within:border-blue-500 rounded-lg overflow-hidden ${className}`}>
//         <div className="w-3/5 p-2  ">
//           <input
//             type="text"
//             placeholder={placeholder}
//             value={value}
//             onChange={onChange}
//             onBlur={onBlur}
//             name={name}
//             className="flex-1 border-none outline-none font-sansation font-regular"
//           />
//         </div>
//         <div
//           className={`bg-custom-green text-custom-white w-1/2 text-center font-sansation font-regular flex justify-center items-center ${unitClassName}`}
//           >
//           <h5 className="m-0">{unit}</h5>
//         </div>
      
//       </div>
//       {touched && error && (
//         <div className="text-red-500 mt-1 text-sm">{error}</div>
//       )}
   
//           </>
  
//   );
// };

// export default UnitField;

import React from "react";
import { MdHeight } from "react-icons/md";

const UnitField = ({
  placeholder,
  unit,
  className,
  unitClassName,
  onChange,
  value,
  onBlur,
  name,
  error,
  touched,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex border focus-within:border-blue-500 rounded-lg overflow-hidden"  style={{height:"45px"}}>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          className="w-full sm:w-3/5  border-none outline-none font-sansation font-regular text-md ps-2"
          style={{height:"45px"}}
        />
        <div
         style={{height:"45px"}}
          className={`bg-custom-green text-custom-white w-1/2 text-center font-sansation font-regular flex justify-center items-center ${unitClassName}`}
        >
          <h5 className="m-0">{unit}</h5>
        </div>
      </div>
      {/* Reserve space for the error message */}
      <div className="h-5">
        {touched && error && (
          <div className="text-red-500 mt-1 text-sm">{error}</div>
        )}
      </div>
    </div>
  );
};

export default UnitField;
