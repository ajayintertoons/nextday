import React from "react";

const ToggleButton = ({
  checked,
  onChange,
  className,
  inputClassName,
  toggleClassName,
}) => {
  return (
    <label
      className={`inline-flex items-center me-5 mt-2 cursor-pointer ${className}`}
    >
      <input
        type="checkbox"
        value=""
        className={`sr-only peer ${inputClassName}`}
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`relative w-11 h-6 border border-custom-green rounded-full peer dark:bg-custom-green peer-focus:ring-4 peer-focus:ring-custom-green dark:peer-focus:ring-custom-green peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-custom-green ${toggleClassName}`}
      />
    
    </label>
  );
};

export default ToggleButton;
