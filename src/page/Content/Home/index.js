import React from "react";
import ButtonDate from "../../../component/buttonDate";
import MultipleBarChart from "../../../component/Chart/MultipleBarChart";
import HorizontalBarChart from "../../../component/Chart/HorizontalBarChart";
import DoughnutChart from "../../../component/Chart/DoughnutChart";
import ProductProgressList from "../../../component/Chart/ProductProgressList";
import TableList from "../../../component/Chart/Table";
import ButtonStatus from "../../../component/buttonStatus/ButtonStatus";

const HomeDashboard = () => {
  const data = [
    {
      id: 1,
      name: "Áo sơ mi dài tay",
      quantity: 48,
      percent: 8.2,
      status: "active",
    },
    {
      id: 2,
      name: "Quần tây",
      quantity: 18,
      percent: 5,
      status: "nonactive",
    },
    {
      id: 3,
      name: "Áo hoodiie",
      quantity: 48,
      percent: 12,
      status: "active",
    },
    {
      id: 4,
      name: "Đầm maxi",
      quantity: 23,
      percent: 3.5,
      status: "active",
    },
    {
      id: 5,
      name: "Áo thun cổ tròn",
      quantity: 48,
      percent: 4.7,
      status: "active",
    },
  ];

  return (
    <div className=" px-[48px]">
      <div>
        <div className=" grid gap-[24px] ">
          <div className=" flex items-center justify-between">
            <p className=" font-lexend-deca text-[16px] font-medium text-secondary">
              {" "}
              Top Sản Phẩm Sản Xuất Nhiều Nhất
            </p>
            <ButtonDate onChange={""} />
          </div>
          <div className=" grid grid-cols-5 gap-[24px]">
            {/* {data.map((list, index) => (
              <div
                key={index}
                className=" cursor-pointer hover:opacity-80 relative col-span-1 p-[24px] shadow-md flex items-center justify-between w-full h-[116px] rounded-[16px] bg-white"
              >
                <div>
                  <h3 className=" text-primary text-[32px] font-bold font-barlow  ">
                    {list.quantity}
                  </h3>
                  <span className=" text-secondary text-[14px] font-normal font-lexend-deca ">
                    {list.name}
                  </span>
                </div>
                <div className=" absolute top-[24px] right-[24px]  flex items-center justify-end">
                  {list.status === "active" ? (
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.5"
                        d="M5.60001 17.75C5.44665 17.7501 5.29694 17.7032 5.17106 17.6156C5.04517 17.528 4.94917 17.4039 4.89599 17.2601C4.84281 17.1162 4.83501 16.9595 4.87363 16.8111C4.91226 16.6627 4.99546 16.5297 5.11201 16.43L12.112 10.43C12.2479 10.3135 12.421 10.2495 12.6 10.2495C12.779 10.2495 12.9521 10.3135 13.088 10.43L20.088 16.43C20.2046 16.5297 20.2878 16.6627 20.3264 16.8111C20.365 16.9595 20.3572 17.1162 20.304 17.2601C20.2509 17.4039 20.1549 17.528 20.029 17.6156C19.9031 17.7032 19.7534 17.7501 19.6 17.75H5.60001Z"
                        fill="url(#paint0_linear_3599_886)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.03 13.488C5.09413 13.5628 5.17237 13.6243 5.26026 13.6688C5.34815 13.7134 5.44396 13.7402 5.54221 13.7477C5.64047 13.7553 5.73924 13.7434 5.83289 13.7127C5.92654 13.682 6.01323 13.6332 6.088 13.569L12.6 7.988L19.112 13.569C19.1861 13.6369 19.2732 13.6892 19.368 13.7228C19.4627 13.7564 19.5633 13.7706 19.6636 13.7645C19.764 13.7585 19.8621 13.7323 19.9522 13.6876C20.0422 13.6428 20.1224 13.5805 20.1878 13.5041C20.2533 13.4278 20.3027 13.3391 20.3332 13.2433C20.3637 13.1475 20.3746 13.0465 20.3653 12.9464C20.356 12.8463 20.3266 12.7491 20.279 12.6605C20.2314 12.572 20.1664 12.4939 20.088 12.431L13.088 6.431C12.9521 6.31453 12.779 6.25052 12.6 6.25052C12.421 6.25052 12.2479 6.31453 12.112 6.431L5.112 12.431C4.96118 12.5605 4.86794 12.7445 4.85275 12.9427C4.83756 13.1409 4.90167 13.337 5.031 13.488H5.03Z"
                        fill="url(#paint1_linear_3599_886)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_3599_886"
                          x1="7.3152"
                          y1="6.92609"
                          x2="10.5187"
                          y2="25.2372"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1FC583" />
                          <stop offset="1" stopColor="#1F9285" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_3599_886"
                          x1="7.31897"
                          y1="2.92049"
                          x2="10.5315"
                          y2="21.2669"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1FC583" />
                          <stop offset="1" stopColor="#1F9285" />
                        </linearGradient>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.5"
                        d="M5.20002 6.25C5.04666 6.24989 4.89694 6.29679 4.77106 6.38439C4.64518 6.47199 4.54918 6.59608 4.496 6.73993C4.44282 6.88378 4.43501 7.04047 4.47364 7.18889C4.51227 7.33731 4.59546 7.47033 4.71202 7.57L11.712 13.57C11.992 13.81 12.407 13.81 12.688 13.57L19.688 7.57C19.8046 7.47033 19.8878 7.33731 19.9264 7.18889C19.965 7.04047 19.9572 6.88378 19.904 6.73993C19.8509 6.59608 19.7549 6.47199 19.629 6.38439C19.5031 6.29679 19.3534 6.24989 19.2 6.25H5.20002Z"
                        fill="url(#paint0_linear_3599_901)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.63001 10.512C4.69414 10.4372 4.77238 10.3757 4.86027 10.3312C4.94816 10.2866 5.04397 10.2598 5.14222 10.2522C5.24048 10.2447 5.33925 10.2566 5.4329 10.2873C5.52655 10.318 5.61324 10.3668 5.68801 10.431L12.2 16.012L18.712 10.431C18.7867 10.3661 18.8735 10.3167 18.9673 10.2855C19.0612 10.2543 19.1603 10.242 19.259 10.2492C19.3576 10.2565 19.4539 10.2832 19.5421 10.3278C19.6304 10.3724 19.709 10.4341 19.7734 10.5092C19.8377 10.5843 19.8866 10.6714 19.9172 10.7655C19.9477 10.8596 19.9594 10.9588 19.9514 11.0574C19.9435 11.156 19.9161 11.252 19.8709 11.34C19.8257 11.428 19.7636 11.5061 19.688 11.57L12.688 17.57C12.5521 17.6865 12.379 17.7505 12.2 17.7505C12.021 17.7505 11.8479 17.6865 11.712 17.57L4.71201 11.57C4.63719 11.5059 4.57573 11.4276 4.53116 11.3397C4.4866 11.2518 4.45978 11.156 4.45226 11.0578C4.44474 10.9595 4.45665 10.8607 4.48732 10.7671C4.51799 10.6735 4.56682 10.5868 4.63101 10.512H4.63001Z"
                        fill="url(#paint1_linear_3599_901)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_3599_901"
                          x1="4.44946"
                          y1="6.25"
                          x2="10.3303"
                          y2="18.4046"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFAC82" />
                          <stop offset="1" stopColor="#FF5630" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_3599_901"
                          x1="4.45007"
                          y1="10.2472"
                          x2="10.3345"
                          y2="22.4059"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#FFAC82" />
                          <stop offset="1" stopColor="#FF5630" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}

                  <span className=" text-secondary text-[14px] font-medium font-lexend-deca ">
                    {list.percent}%
                  </span>
                </div>
              </div>
            ))} */}
            <div className=" cursor-pointer hover:opacity-80 relative col-span-1 p-[24px] shadow-md flex items-center justify-between w-full h-[116px] rounded-[16px] bg-white">
              <div>
                <h3 className=" text-primary text-[32px] font-bold font-barlow  ">
                  0
                </h3>
                <span className=" text-secondary text-[14px] font-normal font-lexend-deca ">
                  Chưa có sản phẩm nào
                </span>
              </div>
            </div>
            <div className=" cursor-pointer hover:opacity-80 relative col-span-1 p-[24px] shadow-md flex items-center justify-between w-full h-[116px] rounded-[16px] bg-white">
              <div>
                <h3 className=" text-primary text-[32px] font-bold font-barlow  ">
                  0
                </h3>
                <span className=" text-secondary text-[14px] font-normal font-lexend-deca ">
                  Chưa có sản phẩm nào
                </span>
              </div>
            </div>
            <div className=" cursor-pointer hover:opacity-80 relative col-span-1 p-[24px] shadow-md flex items-center justify-between w-full h-[116px] rounded-[16px] bg-white">
              <div>
                <h3 className=" text-primary text-[32px] font-bold font-barlow  ">
                  0
                </h3>
                <span className=" text-secondary text-[14px] font-normal font-lexend-deca ">
                  Chưa có sản phẩm nào
                </span>
              </div>
            </div>
            <div className=" cursor-pointer hover:opacity-80 relative col-span-1 p-[24px] shadow-md flex items-center justify-between w-full h-[116px] rounded-[16px] bg-white">
              <div>
                <h3 className=" text-primary text-[32px] font-bold font-barlow  ">
                  0
                </h3>
                <span className=" text-secondary text-[14px] font-normal font-lexend-deca ">
                  Chưa có sản phẩm nào
                </span>
              </div>
            </div>
            <div className=" cursor-pointer hover:opacity-80 relative col-span-1 p-[24px] shadow-md flex items-center justify-between w-full h-[116px] rounded-[16px] bg-white">
              <div>
                <h3 className=" text-primary text-[32px] font-bold font-barlow  ">
                  0
                </h3>
                <span className=" text-secondary text-[14px] font-normal font-lexend-deca ">
                  Chưa có sản phẩm nào
                </span>
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-[24px]">
            <div className=" col-span-1 bg-white shadow-md rounded-[16px] p-[24px]">
              <div className=" flex items-center justify-between">
                <p className=" font-lexend-deca text-[16px] font-medium text-secondary">
                  {" "}
                  Kế Hoạch Sản Xuất
                </p>
                <ButtonDate onChange={""} />
              </div>
              <div className=" mt-4">
                <MultipleBarChart />
              </div>
            </div>
            <div className=" col-span-1 bg-white shadow-md rounded-[16px] p-[24px]">
              <div className=" flex items-center justify-between">
                <p className=" font-lexend-deca text-[16px] font-medium text-secondary">
                  {" "}
                  Top 5 Khách Hàng Có Sản Lượng Nhiều Nhất
                </p>
                <ButtonDate onChange={""} />
              </div>
              <div className=" mt-4">
                <HorizontalBarChart />
              </div>
            </div>
          </div>
          <div className=" grid grid-cols-3 gap-[24px] mb-[24px]">
            <div className=" col-span-1  bg-white shadow-md rounded-[16px] ">
              <div className="py-[24px] px-[16px] flex items-center justify-between">
                <p className=" font-lexend-deca text-[16px] font-medium text-secondary">
                  {" "}
                  Tình Hình Sản Xuất
                </p>
                <ButtonDate />
              </div>
              <div className=" px-[16px]">
                <DoughnutChart />
              </div>
            </div>
            <div className=" col-span-1 bg-white shadow-md rounded-[16px]">
              <div className=" py-[24px] px-[16px] flex items-center justify-between">
                <p className=" font-lexend-deca text-[16px] font-medium text-secondary">
                  {" "}
                  Tiến Độ Sản Xuất Theo Năm
                </p>
                <ButtonStatus />
              </div>
              <div className=" px-[16px]">
                <ProductProgressList />
              </div>
            </div>
            <div className=" col-span-1 bg-white shadow-md rounded-[16px] ">
              <div className="py-[24px] px-[16px] flex items-center justify-between ">
                <p className=" font-lexend-deca text-[16px] font-medium text-secondary">
                  {" "}
                  Nguyên Vật Liệu Cần Mua
                </p>
                <ButtonDate />
              </div>
              <div className="">
                <TableList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
