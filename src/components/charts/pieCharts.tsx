import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { PieChartProps } from "../../interfaces/uiTypes";
import dynamic from "next/dynamic";
import myAllFonts from "../../../config/font";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const PieChart = ({ title, series, value, colors }: PieChartProps) => {
  return (
    <Box
      id={"chart"}
      flex={1}
      display={"flex"}
      bgcolor={"#fcfcfc"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      pl={3.5}
      py={3}
      gap={2}
      borderRadius={"15px"}
      minHeight={"110px"}
      width={"fit-content"}
      className={"transition-all duration-500 shadow-sm hover:shadow-md"}
    >
      <Stack direction={"column"}>
        <Typography
          fontSize={14}
          color={"#808191"}
          className={myAllFonts.className}
        >
          {title}
        </Typography>
        <Typography
          fontSize={24}
          color={"#11142d"}
          fontWeight={700}
          mt={1}
          className={myAllFonts.className}
        >
          {value}
        </Typography>
      </Stack>
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
    </Box>
  );
};

export default PieChart;
