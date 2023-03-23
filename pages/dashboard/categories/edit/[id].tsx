import { Form, Input } from "antd";
import { Edit, useForm } from "@refinedev/antd";
import { GetOneResponse } from "@refinedev/core";
import { ICategory } from "../../../../src/interfaces/categories";
import { GetServerSideProps } from "next";
import { API_URL } from "../../../../src/constants/constants";
import {
  authProvider,
  axiosInstance,
  dataProvider,
} from "../../../../src/utils";

const CategoryEdit: React.FC<{
  initialData: GetOneResponse<ICategory>;
}> = ({ initialData }) => {
  const { formProps, saveButtonProps } = useForm<ICategory>({
    queryOptions: { initialData: initialData },
  });
  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Category Name"
          name="categoryName"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Category Slug"
          name="categorySlug"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Category Image Url"
          name="mainImageUrl"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category Description"
          name="categoryDescription"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea rows={4} placeholder="Category Description" />
        </Form.Item>
      </Form>
    </Edit>
  );
};
export default CategoryEdit;

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

  const data = await dataProvider(
    API_URL,
    axiosInstance,
    context.req.headers.cookie
  ).getOne({
    resource: "categories",
    id: context.params?.id as string,
  });

  return {
    props: {
      initialData: data,
    },
  };
};
