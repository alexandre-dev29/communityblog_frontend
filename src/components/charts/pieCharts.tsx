import React from "react";
import { PieChartProps } from "../../interfaces/uiTypes";
import dynamic from "next/dynamic";
import myAllFonts from "../../../config/font";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const PieChart = ({ title, series, value, colors }: PieChartProps) => {
  return (
    <div
      id={"chart"}
      className={
        "flex flex-1 bg-[#fcfcfc] justify-between items-center pl-6 py-4 gap-2 rounded-md min-h-[110px] w-fit transition-all duration-500 shadow-sm hover:shadow-md"
      }
    >
      <div className={"flex flex-col"}>
        <p className={`${myAllFonts.className} text-sm text-[#808191]`}>
          {title}
        </p>

        <p
          className={`${myAllFonts.className} text-lg text-[#11142d] font-bold mt-2`}
        >
          {value}
        </p>
      </div>
      <ReactApexChart
        options={{
          chart: { type: "donut" },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type={"donut"}
        width={"120px"}
      />
    </div>
  );
};

export default PieChart;
