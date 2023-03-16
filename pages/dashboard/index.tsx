import React from "react";

import PieChart from "@components/charts/pieCharts";
import { Stack } from "@mui/material";
import TotalRevenue from "@components/charts/TotalViews";
import PropertyReferals from "@components/charts/referals";

const DashBoardPage = () => {
  return (
    <div className={"p-8"}>
      <div className={"mt-4 flex flex-wrap gap-12"}>
        <PieChart
          title={"Number Of Followers"}
          value={100}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title={"Number Of Posts"}
          value={550}
          series={[60, 40]}
          colors={["#475ae8", "#e4b8ef"]}
        />
        <PieChart
          title={"Total Likes"}
          value={5543}
          series={[75, 25]}
          colors={["#275be8", "#e5e8ef"]}
        />
        <PieChart
          title={"Total Viewers"}
          value={555}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
      </div>

      <Stack
        mt={"25px"}
        width={"100%"}
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferals />
      </Stack>
    </div>
  );
};

export default DashBoardPage;
