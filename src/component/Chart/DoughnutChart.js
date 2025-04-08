import React from "react";
import Chart from "react-apexcharts";

const DoughnutChart = () => {
  const series = [0, 0, 0];
  const total = series.reduce((a, b) => a + b, 0);
  const isEmpty = total === 0;
  const displaySeries = isEmpty ? [1, 1, 1] : series;
  const percentages = series.map((value) => ((value / total) * 100).toFixed(0));
  const displayColors = isEmpty
    ? ["#E5E7EB", "#E5E7EB", "#E5E7EB"]
    : ["#FF8F0D", "#0375F3", "#1FC583"];

  const chartOptions = {
    chart: {
      height: 286,
      width: 286,
      type: "donut",
    },
    series: displaySeries,
    labels: ["Chưa hoàn thành", "Đang sản xuất", "Hoàn thành"],
    colors: displayColors,
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "10px",
              fontFamily: "Lexend Deca, sans-serif",
              fontWeight: 400,
              colors: "#667085",
              offsetY: 20,
              formatter: () => "Lệnh sản xuất",
            },
            value: {
              show: true,
              fontSize: "24px",
              fontFamily: "Lexend Deca, sans-serif",
              fontWeight: 600,
              color: "#667085",
              offsetY: -10,
              formatter: () => total,
            },

            total: {
              show: true,
              label: "Lệnh sản xuất",
              color: "#000",
              fontSize: "10px",
              fontFamily: "Lexend Deca, sans-serif",
              fontWeight: 400,
              formatter: () => total,
            },
          },
        },
      },
    },
    dataLabels: {
      enabled: false,
      formatter: (val) => `${val.toFixed(0)}%`,
      style: {
        fontSize: "12px",
        fontFamily: "Lexend Deca, sans-serif",
        fontWeight: 600,
        colors: ["#fff"],
      },
      background: {
        enabled: false,
      },
      dropShadow: {
        enabled: false,
      },
    },

    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "start",
      fontSize: "10px",
      fontFamily: "Lexend Deca, sans-serif",
      fontWeight: 400,
      labels: {
        colors: "#6b7280",
      },
      markers: {
        width: 0,
        height: 0,
        fillColors: ["transparent", "transparent", "transparent"],
      },
      formatter: function (seriesName, opts) {
        const value = isEmpty ? 0 : opts.w.globals.series[opts.seriesIndex];
        const colors = ["#FF8F0D", "#0375F3", "#1FC583"];
        const color = colors[opts.seriesIndex];

        return `
        <div style="width: 90px; display: inline-block; border: 1px solid #ccc; padding: 4px; border-radius: 8px; font-size: 10px; color: #6b7280; font-family: 'Lexend Deca', sans-serif; margin-right: -18px;">
          <div style="font-weight: 600; font-size: 16px; color: ${color};">
            ${value}
          </div>
          <div style="font-weight: 400; font-size: 9px; color: #141522 ">${seriesName}</div>
        </div>
      `;
      },
    },
    tooltip: {
      enabled: false,
    },
  };

  return (
    <div className="relative w-[380px] h-[228px] mt-[20px]">
      <Chart
        options={chartOptions}
        series={chartOptions.series}
        type="donut"
        height={320}
        width={320}
      />
      {!isEmpty && (
        <div>
          <div className="absolute left-[20px] top-[2px] space-y-1">
            <div className="flex items-center">
              <span className="text-[12px] mb-4 py-[2px] px-[16px] rounded-[40px] font-lexend-deca font-normal text-white bg-[#1FC583]">
                {percentages[2]}%
              </span>
              <svg
                width="50"
                height="24"
                viewBox="0 0 101 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 23L52.6522 1H0.999996"
                  stroke="#1FC583"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          <div className="absolute right-[50px] top-[6px] ">
            <div className=" flex items-center">
              {" "}
              <svg
                width="50"
                height="24"
                viewBox="0 0 101 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 23L48.3478 1H100"
                  stroke="#FF8F0D"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[12px] mb-4 py-[2px] px-[16px] rounded-[40px] font-lexend-deca font-normal text-white bg-[#FF8F0D]">
                {percentages[0]}%
              </span>
            </div>
          </div>

          <div className="absolute bottom-[-10px] right-[40px] flex items-center space-x-1">
            <div className="flex items-center">
              <svg
                width="70"
                height="24"
                viewBox="0 0 101 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L48.3478 23H100"
                  stroke="#0375F3"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-[12px] mt-4 py-[2px] px-[16px] rounded-[40px] font-lexend-deca font-normal text-white bg-[#0375F3]">
                {percentages[1]}%
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoughnutChart;
