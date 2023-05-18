import React from "react";
import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";
import dynamic from "next/dynamic";
import myAllFonts from "../../../config/font";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const TotalRevenue = () => {
  return (
    <div
      id={"chart"}
      className={
        "transition-all duration-500 shadow-sm hover:shadow-md bg-white rounded-2xl p-6 flex-1 flex flex-col gap-4"
      }
    >
      <p className={`${myAllFonts.className} text-xl font-bold `}>
        Total Views last 8 months
      </p>
      <div className={"flex flex-col gap-6"}>
        <p className={`text-2xl font-extrabold ${myAllFonts.className}`}>
          2000
        </p>
      </div>
      <ReactApexChart
        series={TotalRevenueSeries}
        type={"bar"}
        height={310}
        options={TotalRevenueOptions}
      />
    </div>
  );
};

export default TotalRevenue;
