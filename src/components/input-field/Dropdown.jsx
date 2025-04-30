
import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Dropdown = ({
  title,
  options,
  placeholder,
  value,
  onChange,
  onBlur,
  name,
  error,
  touched,
  isMandatory = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  // const handleSelect = (option) => {
  //   onChange(option);
  //   setIsOpen(false);
  // };
  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
    // if (onBlur) {
    //   onBlur({ target: { name } }); 
    // }
  };
  

  return (
    <div className="relative pt-3">
      <h5 className="font-sansation font-regular">{title}{isMandatory && <span className="text-red-500"> *</span>}</h5>
      <div className="w-full flex cursor-pointer bg-custom-white justify-between items-center mt-2 p-3 border border-gray-300 rounded-lg focus-within:border-blue-500" onClick={handleToggle} style={{ height: "51px" }}>
        <input
          type="text"
          placeholder={placeholder}
          value={value?.label || ""}
          readOnly // Make input read-only
          onBlur={onBlur}
          name={name}
          className="border-none outline-none cursor-pointer w-full font-sansation font-regular text-sm "
        />
        <div className="flex items-center " >
          {isOpen ? (
            <IoIosArrowUp className="mr-2" />
          ) : (
            <IoIosArrowDown className="mr-2" />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-full font-sansation font-regular w-full left-0 bg-white shadow-md border rounded-lg z-10 mt-1">
          <ul>
            {options.map((option) => (
              <li
                key={option.value}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}

      {touched && error && (
        <div className="text-red-500 mt-1 text-sm">{error}</div>
      )}
    </div>
  );
};

export default Dropdown;
