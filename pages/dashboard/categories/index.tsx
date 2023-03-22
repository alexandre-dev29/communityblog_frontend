import React from "react";
import { GetListResponse } from "@refinedev/core";
import { ICategory } from "../../../src/interfaces/categories";
import { Image, Space, Table } from "antd";
import {
  DeleteButton,
  EditButton,
  getDefaultSortOrder,
  List,
  TextField,
  useTable,
} from "@refinedev/antd";
import { GetServerSideProps } from "next";
import { authProvider, axiosInstance, dataProvider } from "../../../src/utils";
import { parseTableParams } from "@refinedev/nextjs-router";
import { API_URL } from "../../../src/constants/constants";

const CategoryList: React.FC<{ initialData: GetListResponse<ICategory> }> = ({
  initialData,
}) => {
  const { tableProps, sorters } = useTable<ICategory>({
    pagination: { mode: "client" },
    queryOptions: { initialData: initialData },
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="categoryName"
          key="categoryName"
          title="Name"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("categoryName", sorters)}
        />
        <Table.Column
          dataIndex="categorySlug"
          key="categorySlug"
          title="Location"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("categorySlug", sorters)}
        />

        <Table.Column
          dataIndex="mainImageUrl"
          key="mainImageUrl"
          title="Category Image"
          render={(value) => (
            <Image
              src={value}
              width={70}
              height={70}
              className={"rounded-full"}
              placeholder={
                <Image
                  preview={false}
                  src={`${value}?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200`}
                  width={70}
                />
              }
            />
          )}
          defaultSortOrder={getDefaultSortOrder("categorySlug", sorters)}
        />

        <Table.Column
          dataIndex="categoryDescription"
          key="categoryDescription"
          title="Category Description"
          render={(value) => <TextField value={value} />}
          defaultSortOrder={getDefaultSortOrder("categoryDescription", sorters)}
        />

        <Table.Column<ICategory>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};

export default CategoryList;

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
    resource: "categories",
    filters,
    pagination,
    sorters,
  });
  console.log(data);

  return {
    props: { initialData: data },
  };
};
