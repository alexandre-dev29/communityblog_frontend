import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-markdown-preview/esm/styles/markdown.css";
import dynamic from "next/dynamic";
import { GetServerSideProps } from "next";
import { authProvider } from "src/utils/authProvider";
import { Create, useForm, useSelect } from "@refinedev/antd";
import { ICategory } from "../../../../src/interfaces/categories";
import { Form, Input, Select } from "antd";
import { IPost } from "../../../../src/interfaces/posts";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });
export default function ProductCreate() {
  const { formProps, saveButtonProps, queryResult } = useForm<IPost>();
  const postData = queryResult?.data?.data;
  const { selectProps: categorySelectProps } = useSelect<ICategory>({
    resource: "categories",
    defaultValue: postData?.Category?.id,
    optionLabel: "categoryName",
  });
  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <div className={"grid grid-cols-2 gap-x-8"}>
          <Form.Item
            label="Post Title"
            name="postTitle"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Category"
            name={"categoryId"}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select {...categorySelectProps} />
          </Form.Item>
          <Form.Item
            label="Post Main Image"
            name="postMainImage"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <Form.Item
          label="Post Description"
          name="postDescription"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea rows={4} placeholder="Post Description" />
        </Form.Item>
        <Form.Item
          label="Content"
          name="postContent"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <MDEditor data-color-mode="light" />
        </Form.Item>
      </Form>
    </Create>
  );
}

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
