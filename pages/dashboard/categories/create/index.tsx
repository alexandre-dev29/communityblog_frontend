import { GetServerSideProps } from "next";
import { authProvider } from "src/utils/authProvider";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { IResourceComponentsProps } from "@refinedev/core";
import { ICategory } from "../../../../src/interfaces/categories";

const CategoryCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICategory>();
  return (
    <Create saveButtonProps={saveButtonProps}>
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
    </Create>
  );
};

export default CategoryCreate;
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

  return {
    props: {},
  };
};
