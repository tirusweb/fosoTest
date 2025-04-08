import React from "react";
import picNull from "../../image/ic_content.svg";

const TableList = () => {
  const fakeApi = [
    {
      id: 1,
      name: "Chỉ cotton",
      code: "NVL_000014",
      status: "none",
      unit: "Cuộn",
      quantity: 8,
      image: "https://i.ibb.co/fVQdfQTk/Capture.png",
    },
    {
      id: 2,
      name: "Vải lụa",
      code: "NVL_000024",
      status: "none",
      unit: "Mét",
      quantity: 8,
      image: "https://i.ibb.co/fVQdfQTk/Capture.png",
    },
    {
      id: 3,
      name: "Vải lót",
      code: "NVL_000024",
      status: "none",
      unit: "Mét",
      quantity: 8,
      image: "https://i.ibb.co/fVQdfQTk/Capture.png",
    },
    {
      id: 4,
      name: "Vải chống thấm",
      code: "NVL_000024",
      status: "none",
      unit: "Mét",
      quantity: 8,
      image: "https://i.ibb.co/fVQdfQTk/Capture.png",
    },
    {
      id: 5,
      name: "Vãi nỉ",
      code: "NVL_000024",
      status: "none",
      unit: "Mét",
      quantity: 8,
      image: "https://i.ibb.co/fVQdfQTk/Capture.png",
    },
  ];

  return (
    <>
      <div className=" overflow-y-auto h-[360px] ">
        <table className=" table-fixed w-full">
          <thead>
            <tr className=" bg-[#F3F4F6]">
              <th className=" py-[8px] text-center font-lexend-deca text-[#52575E] font-semibold text-[10px] tracking-wider">
                STT
              </th>
              <th
                colSpan={2}
                className=" py-[8px] text-left font-lexend-deca text-[#52575E] font-semibold text-[10px] tracking-wider"
              >
                Nguyên vật liệu
              </th>
              <th className=" py-[8px] text-center font-lexend-deca text-[#52575E] font-semibold text-[10px] tracking-wider">
                Đơn vị tính
              </th>
              <th className=" py-[8px] text-center font-lexend-deca text-[#52575E] font-semibold text-[10px] tracking-wider">
                Số lượng
              </th>
            </tr>
          </thead>
          {fakeApi?.length > 0 ? (
            <tbody>
              {fakeApi.map((list, index) => (
                <tr
                  key={list.id}
                  className="cursor-pointer  bg-white border-b border-[#F3F3F4]"
                >
                  <td className="py-[8px] font-lexend-deca font-semibold text-[14px] text-center">
                    {index + 1}
                  </td>
                  <td colSpan={2} className="  text-left py-[8px]">
                    <div className=" flex items-start justify-start">
                      <img
                        className=" w-[32px] h-[32px] rounded-[4px] "
                        src={list.image}
                        alt="ảnh sản phẩm"
                      />
                      <div className=" ml-2 font-lexend-deca ">
                        <p className=" font-semibold text-[12px]">
                          {" "}
                          {list.name}
                        </p>
                        <p className=" font-normal text-[10px] text-[#667085]">
                          {" "}
                          ({list.status}){" "}
                        </p>
                        <p className=" font-normal text-[10px] text-[#3276FA]">
                          {list.code}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="py-[8px] font-lexend-deca font-semibold text-[14px] text-center">
                    {list.unit}
                  </td>
                  <td className="py-[8px] font-lexend-deca font-semibold text-[14px] text-center">
                    {list.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tr className="cursor-pointer  bg-white border-b border-[#F3F3F4]">
              <td colSpan={5} className=" w-full pl-[20%] flex-row  items-center ">
                <img className=" w-[250px] h-[250px]   " src={picNull} />
                <p className=" font-medium pr-8 font-lexend-deca text-center text-[24px] text-[#52575E]">
                  {" "}
                  chưa có dữ liệu
                </p>
              </td>
            </tr>
          )}
        </table>
      </div>
    </>
  );
};

export default TableList;
