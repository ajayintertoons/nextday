import React from 'react';

// Define the SearchInput component
const SearchInput = ({ placeholder = "Search...", onChange, className = '', Icon = null }) => {
  return (
    <div className={`flex items-center justify-between px-3 mt-3 border rounded-md w-full sm:w-1/2 bg-custom-white  ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="p-2 outline-none w-full font-sansation font-regular text-sm"
        onChange={onChange}
      />
      {Icon && <Icon />}
    </div>
  );
};

export default SearchInput;
