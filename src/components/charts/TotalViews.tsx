import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const TotalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      flexDirection={"column"}
      id={"chart"}
      display={"flex"}
      borderRadius={"15px"}
      bgcolor={"#fcfcfc"}
    >
      <Typography fontSize={18} fontWeight={600} color={"#11142d"}>
        Total Views last 8 months
      </Typography>
      <Stack my={"20px"} direction={"row"} gap={4} flexWrap={"wrap"}>
        <Typography fontSize={28} fontWeight={700} color={"#11124d"}>
          2000
        </Typography>
      </Stack>
      <ReactApexChart
        series={TotalRevenueSeries}
        type={"bar"}
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  );
};

export default TotalRevenue;
