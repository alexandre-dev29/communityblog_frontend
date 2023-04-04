import { useTable } from "@refinedev/antd";
import { IPost } from "../../../src/interfaces/posts";
import { CircularProgress } from "@mui/material";
import PostCardForDashboard from "@components/dashboard/postCardForDashboard";
import { API_URL } from "../../../src/constants/constants";
import { authProvider, axiosInstance, dataProvider } from "../../../src/utils";
import { parseTableParams } from "@refinedev/nextjs-router";
import { GetServerSideProps } from "next";
import { GetListResponse } from "@refinedev/core";
import Link from "next/link";

const ProductList: React.FC<{ initialData: GetListResponse<IPost> }> = ({
  initialData,
}) => {
  const {
    tableQueryResult: { data, isLoading, isError },
  } = useTable<IPost>({
    queryOptions: { initialData: initialData },
  });

  const allPosts = data?.data ?? [];
  if (isLoading) return <CircularProgress />;
  if (isError) return <p>There was an error</p>;
  return (
    <div>
      <div className={"flex justify-between"}>
        <h3 className={"text-2xl font-extrabold"}>Here are all your posts</h3>
        <Link
          href={"/dashboard/posts/create"}
          className={
            "bg-myPrimary px-4 py-2 rounded-lg text-white transition-all duration-500 hover:scale-105"
          }
        >
          Create new post
        </Link>
      </div>

      <div className={"grid grid-cols-4 gap-8 p-8"}>
        {allPosts.map((value) => (
          <PostCardForDashboard postData={value} key={value.id} />
        ))}
      </div>
    </div>
  );
};
export default ProductList;

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
  ).getList({
    resource: "posts",
    filters,
    pagination,
    sorters,
  });

  return {
    props: { initialData: data },
  };
};
