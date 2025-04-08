import React from "react";
import Chart from "react-apexcharts";

const MultipleBarChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 261,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20px",
        borderRadius: 4,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "last",
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },

    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        "Áo ba lỗ",
        "Áo sơ mi",
        "Áo thun polo",
        "Quần baggy",
        "Quần jogger",
      ],
      labels: {
        show: true,
        style: {
          colors: "#9295A4",
          fontSize: "12px",
          fontFamily: "Lexend Deca, sans-serif",
          fontWeight: 400,
        },
      },
    },
    colors: ["#0375F3", "#1FC583"],
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex];

        return `
            <div style="padding: 8px 12px; font-size: 13px; background-color: #000;">
             <span style="color: #fff; font-weight: bold;">${value} Cái</span>
            </div>
          `;
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#9295A4",
          fontSize: "12px",
          fontFamily: "Lexend Deca, sans-serif",
          fontWeight: 400,
        },
      },
    },
    grid: {
      strokeDashArray: 4,
    },
  };

  const series = [
    {
      name: "Kế hoạch",
      data: [60, 100, 80, 70, 88],
    },
    {
      name: "Thực hiện",
      data: [40, 60, 20, 44, 58],
    },
  ];

  return (
    <div className="relative pl-[20px]">
      <div className="flex justify-end items-center ">
        <div className="inline-flex items-center">
          <span className=" h-[13px] w-[27px] rounded-[20px] inline-block bg-[#0375F3] mx-2 "></span>
          <span className="text-[14px] font-lexend-deca font-medium text-[#3A3E4C]">
            Kế hoạch
          </span>
        </div>
        <div className="inline-flex items-center ">
          <span className="h-[13px] w-[27px] rounded-[20px] inline-block ml-4 bg-[#1FC583] mx-2"></span>
          <span className="text-[14px] font-lexend-deca font-medium text-[#3A3E4C]">
            Thực hiện
          </span>
        </div>
      </div>
      <div className="absolute font-lexend-deca left-[2px] bottom-[24px] text-xs text-gray-500  origin-bottom-left">
        Mặt hàng
      </div>
      <div className="absolute font-lexend-deca left-[30px] top-[0px] text-xs text-gray-500  origin-bottom-left">
        Cái
      </div>
      <Chart options={options} series={series} type="bar" height={300} />
    </div>
  );
};

export default MultipleBarChart;
