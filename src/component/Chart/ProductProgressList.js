import React from "react";

const data = [
  { name: "Áo sơ mi dài tay", quantity: 123, totalQuantity: 246 },
  { name: "Áo sơ mi cụt tay", quantity: 321, totalQuantity: 428 },
  { name: "Quần baggy", quantity: 231, totalQuantity: 513 },
  { name: "Quần tây", quantity: 999, totalQuantity: 1665 },
  { name: "Đầm maxi", quantity: 876, totalQuantity: 973 },
  { name: "Áo hoodie", quantity: 765, totalQuantity: 4100 },
  { name: "Áo khoác bomber", quantity: 543, totalQuantity: 2263 },

].map(item => ({
  ...item,
  percent: ((item.quantity / item.totalQuantity) * 100).toFixed(1),
}));

const ProductProgressList = () => {
  return (
    <div className="overflow-y-auto grid grid-rows-7 ">
      {data.map((item, index) => (
        <div key={index} className=" row-span-1 overflow-y-auto h-[50px] gap-[8px] "> 
          <div className="flex justify-between">
            <span className="font-lexend-deca text-[14px] font-medium text-[#1C252E]">
              {item.name}
            </span>
            <span className="font-lexend-deca text-[14px] font-medium text-[#1C252E]">
              {item.quantity} cái{" "}
              <span className="text-[#637381] font-normal">
                ({item.percent}%)
              </span>
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2 mt-1">
            <div
              className="bg-emerald-500 h-2 rounded-full"
              style={{ width: `${item.percent}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductProgressList;
