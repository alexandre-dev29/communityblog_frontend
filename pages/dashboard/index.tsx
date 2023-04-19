import React from "react";

import PieChart from "@components/charts/pieCharts";
import { Box, Stack } from "@mui/material";
import TotalRevenue from "@components/charts/TotalViews";
import PropertyReferals from "@components/charts/referals";
import ArticleTable from "@components/dashboard/articleTable";
import { GetServerSideProps } from "next";
import { authProvider, axiosInstance, dataProvider } from "../../src/utils";
import { parseTableParams } from "@refinedev/nextjs-router";
import { API_URL } from "../../src/constants/constants";

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
          value={1}
          series={[1, 30]}
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

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const { authenticated, redirectTo } = await authProvider.check(context);

  if (!authenticated) {
    return {
      props: {},
      redirect: {
        destination: redirectTo,
        permanent: false,
      },
    };
  }

  const { pagination, filters, sorters } = parseTableParams(
    context.resolvedUrl?.split("?")[1] ?? ""
  );

  const data = await dataProvider(
    API_URL,
    axiosInstance,
    context.req.headers.cookie
  ).custom({
    url: `${API_URL}/posts/getPosts/allPosts`,
    method: "get",
    filters,
    sorters,
  });

  return {
    props: { initialData: data },
  };
};

export default DashBoardPage;
