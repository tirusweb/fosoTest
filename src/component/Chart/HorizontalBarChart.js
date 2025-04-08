import React from "react";
import ApexCharts from "react-apexcharts";

const HorizontalBarChart = () => {
  const chartOptions = {
    chart: {
      type: "bar",
      height: 316,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    series: [
      {
        data: [3100, 3000, 3190, 2900, 2900],
      },
    ],
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4,
        borderRadiusApplication: "end",
        barHeight: "8px",
      },
    },
    colors: ["#0375F3"],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Công ty Dệt may Happy Polla",
        "Công ty May mặc Saigon trendy",
        "Outlet Lemon squeeze",
        "Shop quần áo streetwear New...",
        "Shop thời trang công sở Basic Office",
      ],
      min: 0,
      max: 3200,
      tickAmount: 4,
      crosshairs: {
        show: true,
      },
      labels: {
        show: true,
        style: {
          colors: "#9ca3af",
          fontSize: "12px",
          fontFamily: "Lexend Deca, sans-serif",
          fontWeight: 400,
        },
        offsetX: 0,
      },
      crosshairs: { show: true },
    },
    yaxis: {
      labels: {
        show: true,
        align: "left",
        maxWidth: 80, 
        style: {
          colors: "#9ca3af",
          fontSize: "12px",
          fontFamily: "Lexend Deca, sans-serif",
          fontWeight: 400,
          whiteSpace: "normal", 
        },
        offsetX: -20,
       
      },
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const value = series[seriesIndex][dataPointIndex];
        return `
          <div style="padding: 8px 12px; font-size: 13px; background-color: #000;">
            <span style="color: #fff; font-weight: bold;">${value} </span>
          </div>
        `;
      },
    },
    grid: {
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  return (
    <div className=" relative w-full">
      <ApexCharts
        options={chartOptions}
        series={chartOptions.series}
        type="bar"
        height={316}
      />
       <div className="absolute font-lexend-deca left-[6px] bottom-[30px] text-xs text-gray-500  origin-bottom-left">
        số lượng
      </div>
      <div className="absolute font-lexend-deca left-[4px] top-[0px] text-xs text-gray-500  origin-bottom-left">
        Khách hàng
      </div>
    </div>
  );
};

export default HorizontalBarChart;
