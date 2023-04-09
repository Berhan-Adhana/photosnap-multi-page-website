import React from "react";

const InstalmentSwitch = ({ isMonthly, handleChange }) => {
  return (
    <div className="flex justify-center">
      <span
        className={`mr-3 text-sm font-medium ${
          !isMonthly ? "text-gray-900" : "text-gray-300"
        }  `}
      >
        Yearly
      </span>
      <label
        className="relative inline-flex items-center cursor-pointer"
        onChange={handleChange}
      >
        <input type="checkbox" value="" className="sr-only peer" />

        <div className="w-11 h-6 bg-gray-200 hover:bg-black peer-focus:outline-none  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-black hover:after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 "></div>
        <span
          className={`ml-3 text-sm font-medium ${
            isMonthly ? "text-gray-900" : "text-gray-300"
          }`}
        >
          Monthly
        </span>
      </label>
    </div>
  );
};

export default InstalmentSwitch;
