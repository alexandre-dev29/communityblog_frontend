import React from "react";
import { IResourceComponentsProps } from "@refinedev/core";
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

const CategoryList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps, sorters } = useTable<ICategory>({
    pagination: { mode: "client" },
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
