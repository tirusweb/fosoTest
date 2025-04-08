import { useState } from "react";
const ButtonStatus = ({ onChange }) => {
  const [value, setValue] = useState("month");

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div className=" flex items-center justify-around border rounded-lg px-[8px] py-[8px] w-[150px]  h-[40px] text-sm font-medium text-gray-700 shadow-sm bg-white">
      <select
        value={value}
        onChange={handleChange}
        className="appearance-none pl-2 cursor-pointer bg-transparent text-sm font-medium text-[#3A3E4C] focus:outline-none"
      >
        <option value="today">Hoàn thành</option>
        <option  value="week">Đang Xử lý</option>
        <option  value="month">Chưa hoàn thành</option>
      </select>
      <svg
        className=" size-5 mt-1 text-gray-400"
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

export default ButtonStatus;
