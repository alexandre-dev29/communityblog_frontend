import React, { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  EyeFilled,
  EyeInvisibleFilled,
} from "@ant-design/icons";
import { Card, Image, message, Popconfirm, Skeleton, Tooltip } from "antd";
import { IPost } from "../../interfaces/posts";
import Link from "next/link";
import { axiosInstance, dataProvider } from "../../utils";
import { API_URL } from "../../constants/constants";

const cancel = (e: any) => {
  message.error("cancelled");
};

const { Meta } = Card;
const PostCardForDashboard = ({ postData }: { postData: IPost }) => {
  const [isPublished, setIsPublished] = useState(postData.isPublished);
  const confirm = async () => {
    setIsPublished(!isPublished);
    await axiosInstance.patch(`${API_URL}/posts/handle/setPublished`, {
      id: postData.id,
      isPublished: !isPublished,
    });
    message.success(
      `Your post has been ${!isPublished ? "Published" : "UnPublished"}`
    );
  };
  const confirmDelete = async () => {
    await dataProvider(`${API_URL}`, axiosInstance).deleteOne({
      resource: "posts",
      id: postData.id,
    });
    message.success(`Your post has been deleted`);
  };

  return (
    <Card
      hoverable={true}
      bordered={true}
      className={"border-gray-300"}
      cover={
        <Image
          placeholder={
            <Skeleton.Image active={true} className={"w-full min-h-[200px]"} />
          }
          alt="post Image"
          src={postData.postMainImage}
        />
      }
      actions={[
        <Link href={`/dashboard/posts/edit/${postData.id}`}>
          <EditOutlined key="edit" />
        </Link>,
        isPublished ? (
          <Popconfirm
            title="UnPublish this post"
            description="Are you sure to unpublish this post?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <Tooltip
              title={"This post is published click to unpublish"}
              color={"green"}
              className={"text-center"}
            >
              <EyeFilled key="ellipsis" className={"text-green-600 text-lg"} />
            </Tooltip>
          </Popconfirm>
        ) : (
          <Popconfirm
            title="Publish this post"
            description="Are you sure to publish this post?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Yes, publish"
            cancelText="No"
          >
            <Tooltip
              title={"This post is unpublished click to publish it"}
              color={"red"}
              className={"text-center"}
            >
              <Popconfirm
                title="Delete the task"
                description="Are you sure to delete this task?"
                onConfirm={confirm}
                onCancel={cancel}
                okText="Yes"
                cancelText="No"
              >
                <EyeInvisibleFilled
                  key="ellipsis"
                  className={"text-red-600 text-lg"}
                />
              </Popconfirm>
            </Tooltip>
          </Popconfirm>
        ),
        <Link href={`/posts/${postData.postSlug}`} target={"_blank"}>
          Preview
        </Link>,
        <Popconfirm
          title="Delete this post"
          description="Are you sure to delete this post?"
          onConfirm={confirmDelete}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <DeleteOutlined key="delete" className={"text-red-600"} />
        </Popconfirm>,
      ]}
    >
      <p className={"text-myPrimary text-center font-bold"}>
        {postData.Category?.categoryName}
      </p>
      <Meta
        title={postData.postTitle}
        description={postData.postDescription}
        className={"text-center"}
      />
    </Card>
  );
};

export default PostCardForDashboard;
