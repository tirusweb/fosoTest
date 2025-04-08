import { useState } from "react";
const ButtonDate = ({ onChange }) => {
  const [value, setValue] = useState("month");

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div className="relative inline-flex items-center border rounded-lg px-[12px] py-[8px] w-[150px]  h-[40px] text-sm font-medium text-gray-700 shadow-sm bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5 text-[#9295A4] "
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
        />
      </svg>

      <select
        value={value}
        onChange={handleChange}
        className="appearance-none cursor-pointer bg-transparent pr-6 pl-4 text-sm font-medium text-[#3A3E4C] focus:outline-none"
      >
        <option value="today">Hôm nay</option>
        <option value="week">Tuần này</option>
        <option value="month">Tháng này</option>
        <option value="quarter">Quý này</option>
        <option value="year">Năm nay</option>
      </select>
      <svg
        className="absolute right-2 w-4 h-4 pointer-events-none text-gray-400"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
};

export default ButtonDate;
