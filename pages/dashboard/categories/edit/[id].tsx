import { Form, Input } from "antd";
import { Edit, useForm } from "@refinedev/antd";
import { IResourceComponentsProps } from "@refinedev/core";
import { ICategory } from "../../../../src/interfaces/categories";

const CategoryEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<ICategory>();
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
