import React from "react";
import { Image } from "antd";
import Link from "next/link";
import { Table } from "flowbite-react";
import { IPost } from "../../interfaces/posts";

const ArticleTable = ({ allPosts }: { allPosts: IPost[] }) => {
  return (
    <div className={"w-full pr-8"}>
      <h4 className={"font-extrabold text-gray-800 "}>Recent Article</h4>
      <Table hoverable={true} className={"mt-4"}>
        <Table.Head>
          <Table.HeadCell className="!p-4">No</Table.HeadCell>
          <Table.HeadCell className={"text-left"}>Article Title</Table.HeadCell>
          <Table.HeadCell>Author</Table.HeadCell>
          <Table.HeadCell>Post Date</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Likes</Table.HeadCell>
          <Table.HeadCell>shared</Table.HeadCell>
          <Table.HeadCell>Viewers</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {allPosts.map((value, index) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={value.id}
            >
              <Table.Cell className="!p-6 ">{index}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <div className={"col-span-3 flex items-center gap-4"}>
                  <Image
                    src={value.postMainImage}
                    alt={"unsplash images"}
                    width={60}
                    height={60}
                    className={"rounded-lg shadow-lg"}
                    style={{ width: "auto", height: "auto" }}
                  />
                  <Link
                    href={`/article/${value.postSlug}`}
                    className={"text-gray-500 font-bold"}
                    target={"_blank"}
                  >
                    {value.postTitle}
                  </Link>
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className={"flex items-center"}>
                  <Image
                    src={value.author.avatarImage}
                    alt={"unsplash images"}
                    className={"rounded-full shadow-lg  h-[40px] w-[40px]"}
                  />
                  <p className={"ml-2 font-bold"}>Alexandre</p>
                </div>
              </Table.Cell>
              <Table.Cell>{`${new Date(
                value.publishedAt ?? Date.now()
              ).toLocaleDateString("en-CA")}`}</Table.Cell>
              <Table.Cell>{value.Category?.categoryName}</Table.Cell>
              <Table.Cell>{value.postTotalLikes}</Table.Cell>
              <Table.Cell>{value.postTotalShares}</Table.Cell>
              <Table.Cell>{value.postViewCount}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ArticleTable;
