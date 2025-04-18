
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from "dayjs";

const InputfieldWithIcon = ({
  title,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  name,
  error,
  touched,
  Icon = null,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange({
      target: {
        name: name,
        value:
          type === "datetime-local"
            ? dayjs(date).format("YYYY-MM-DDTHH:mm")
            : type === "date"
            ? dayjs(date).format("YYYY-MM-DD")
            : dayjs(date).format("HH:mm"),
      },
    });
  };

  return (
    <div>
      <h5 className="font-sansation font-regular pt-3">{title}</h5>

      <div className="w-full flex items-center justify-between mt-2 p-2.5 border border-gray-300 rounded-lg focus-within:border-blue-500" >
        {(type === "date" || type === "time" || type === "datetime-local") ? (
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            onBlur={onBlur}
            name={name}
            placeholderText={placeholder}
            className="border-none outline-none w-full font-sansation font-regular text-sm"
            dateFormat={
              type === "datetime-local"
                ? "yyyy-MM-dd'T'HH:mm"
                : type === "date"
                ? "yyyy-MM-dd"
                : "HH:mm"
            }
            showTimeSelect={type === "datetime-local" || type === "time"}
            showTimeSelectOnly={type === "time"}
            timeIntervals={15}
            timeCaption="Time"
            showMonthDropdown={type === "date" || type === "datetime-local"} // Enable month selection
            showYearDropdown={type === "date" || type === "datetime-local"} // Enable year selection
            dropdownMode="select" // Uses dropdowns instead of scroll for months and years
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            className="border-none outline-none w-full font-sansation font-regular bg-[#ffffff]  "
          />
        )}
        <div className="">
          {typeof Icon === "string" ? (
            <img src={Icon} alt="Icon" className="w-6 h-6" />
          ) : (
            Icon && <Icon />
          )}
        </div>
      </div>
      {touched && error && (
        <div className="text-red-500 mt-1 text-sm">{error}</div>
      )}
    </div>
  );
};

export default InputfieldWithIcon;
