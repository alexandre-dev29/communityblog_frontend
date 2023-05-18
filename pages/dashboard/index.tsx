import React from "react";

import PieChart from "@components/charts/pieCharts";
import TotalRevenue from "@components/charts/TotalViews";
import PropertyReferals from "@components/charts/referals";
import ArticleTable from "@components/dashboard/articleTable";
import { GetServerSideProps } from "next";
import { authProvider, axiosInstance, dataProvider } from "../../src/utils";
import { parseTableParams } from "@refinedev/nextjs-router";
import { API_URL } from "../../src/constants/constants";
import { GetListResponse } from "@refinedev/core";
import { IPost } from "../../src/interfaces/posts";

function TotalFollowers(props: {}) {
  return (
    <PieChart
      title={"Number Of Followers"}
      value={10}
      series={[50, 10]}
      colors={["#e4e8ef", "#475be8"]}
    />
  );
}

const DashBoardPage: React.FC<{ initialData: GetListResponse<IPost> }> = ({
  initialData,
}) => {
  const totalLikes: number = initialData.data
    .map((a) => a.postTotalLikes)
    .reduce(
      (previousValue, currentValue): number => previousValue + currentValue
    );
  const totalViews: number = initialData.data
    .map((a) => a.postViewCount)
    .reduce(
      (previousValue, currentValue): number => previousValue + currentValue
    );

  return (
    <div className={"px-8 py-6"}>
      <div className={"flex flex-wrap gap-12"}>
        <TotalFollowers key={1} />
        <PieChart
          key={2}
          title={"Number Of Posts"}
          value={initialData.data.length}
          series={[initialData.data.length, 50]}
          colors={["#475ae8", "#e4b8ef"]}
        />
        <PieChart
          key={3}
          title={"Total Likes"}
          value={totalLikes}
          series={[totalLikes, 50]}
          colors={["#275be8", "#e5e8ef"]}
        />
        <PieChart
          key={4}
          title={"Total Viewers"}
          value={totalViews}
          series={[totalViews, 50]}
          colors={["#475be8", "#e4e8ef"]}
        />
      </div>

      <div className={"mt-[25px] w-full flex flex-col lg:flex-row gap-6"}>
        <TotalRevenue />
        <PropertyReferals />
      </div>
      <div
        id={"chart"}
        className={
          "transition-all flex flex-1 bg-white pl-8 py-6 gap-2 mt-3 rounded-md min-h-[110px] duration-500 shadow-sm hover:shadow-md "
        }
      >
        <ArticleTable allPosts={initialData.data} />
      </div>
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
