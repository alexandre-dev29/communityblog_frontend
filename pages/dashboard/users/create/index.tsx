import { IResourceComponentsProps } from "@refinedev/core";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import { IUser } from "../../../../src/interfaces/users";

const ProductCreate: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps } = useForm<IUser>();

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <div className={"w-full grid grid-cols-2 gap-x-12"}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Default Password"
            name="password"
            rules={[
              {
                required: true,
                type: "string",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Avatar image"
            name="avatarImage"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="user title"
            name="userTitle"
            rules={[
              {
                required: false,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <Form.Item
          label="Biography"
          name="biography"
          rules={[
            {
              required: false,
            },
          ]}
        >
          <Input.TextArea rows={4} placeholder="Biography" />
        </Form.Item>
      </Form>
    </Create>
  );
};
export default ProductCreate;
