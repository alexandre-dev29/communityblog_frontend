import React from "react";

import PieChart from "@components/charts/pieCharts";
import { Box, Stack } from "@mui/material";
import TotalRevenue from "@components/charts/TotalViews";
import PropertyReferals from "@components/charts/referals";
import ArticleTable from "@components/dashboard/articleTable";

const DashBoardPage = () => {
  return (
    <div className={"p-8"}>
      <div className={"mt-4 flex flex-wrap gap-12"}>
        <PieChart
          key={1}
          title={"Number Of Followers"}
          value={100}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          key={2}
          title={"Number Of Posts"}
          value={550}
          series={[60, 40]}
          colors={["#475ae8", "#e4b8ef"]}
        />
        <PieChart
          key={3}
          title={"Total Likes"}
          value={5543}
          series={[75, 25]}
          colors={["#275be8", "#e5e8ef"]}
        />
        <PieChart
          key={4}
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
      <Box
        id={"chart"}
        flex={1}
        display={"flex"}
        bgcolor={"#fff"}
        flexDirection={"row"}
        pl={3.5}
        py={3}
        gap={2}
        mt={4}
        borderRadius={"15px"}
        minHeight={"110px"}
        className={"transition-all duration-500 shadow-sm hover:shadow-md "}
      >
        <ArticleTable />
      </Box>
    </div>
  );
};

export default DashBoardPage;
