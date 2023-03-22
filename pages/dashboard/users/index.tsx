import { GetServerSideProps } from "next";
import { authProvider } from "src/utils/authProvider";
import { IUser } from "../../../src/interfaces/users";
import { CanAccess, GetListResponse } from "@refinedev/core";
import { parseTableParams } from "@refinedev/nextjs-router";
import { axiosInstance, dataProvider } from "src/utils";
import { API_URL } from "../../../src/constants/constants";
import UserListCard from "@components/users/userListCard";
import Link from "next/link";

export const UsersList: React.FC<{ initialData: GetListResponse<IUser> }> = ({
  initialData,
}) => {
  return (
    <div className={"p-4"}>
      <div className={"flex justify-between"}>
        <h3 className={"text-2xl font-extrabold"}>User List</h3>
        <CanAccess action={"Create"} resource={"categories"}>
          <Link
            href={"/dashboard/users/create"}
            className={
              "bg-teal-600 px-4 py-2 rounded-lg text-white transition-all duration-500 hover:scale-105"
            }
          >
            Create User
          </Link>
        </CanAccess>
      </div>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  mt-4"
        }
      >
        {initialData.data.map((value) => (
          <UserListCard userInformation={value} key={value.id} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;

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
    resource: "users",
    filters,
    pagination,
    sorters,
  });

  return {
    props: { initialData: data },
  };
};
