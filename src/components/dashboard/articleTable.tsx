import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Table } from "flowbite-react";

const ArticleTable = () => {
  const datas: Array<{
    articleTitle: string;
    articleImage: string;
    postDate: string;
    category: string;
    like: string;
    shared: string;
    viewers: string;
    categoryColor: string;
    articleSlug: string;
  }> = [
    {
      like: "120K",
      articleImage:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      shared: "100",
      postDate: "07 janv 2021",
      articleTitle: "Master Notifications With ChatGPT, React and NodeJS ",
      category: "Flutter/Dart",
      viewers: "200k",
      categoryColor: "bg-teal-600",
      articleSlug: "testinglink",
    },
    {
      like: "120K",
      articleImage:
        "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1478&q=80",
      shared: "100",
      postDate: "07 janv 2021",
      articleTitle:
        "Creating a website aggregator with ChatGPT, React, and Node.js",
      category: "Javascript",
      viewers: "200k",
      categoryColor: "bg-red-600",
      articleSlug: "testinglink",
    },
    {
      like: "120K",
      articleImage:
        "https://images.unsplash.com/photo-1547082299-de196ea013d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      shared: "100",
      postDate: "07 janv 2021",
      articleTitle: "Creating a resume builder with React, NodeJS and AI ",
      category: "Frontend ",
      viewers: "200k",
      categoryColor: "bg-green-700",
      articleSlug: "testinglink",
    },
    {
      like: "120K",
      articleImage:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      shared: "100",
      postDate: "07 janv 2021",
      articleTitle:
        "Build a notification system for a blog site with React, NodeJS and Novu ",
      category: "Games",
      viewers: "200k",
      categoryColor: "bg-indigo-600",
      articleSlug: "testinglink",
    },
    {
      like: "120K",
      articleImage:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      shared: "100",
      postDate: "07 janv 2021",
      articleTitle: "Building a forum with React, NodeJS",
      category: "Backend Dev",
      viewers: "200k",
      categoryColor: "bg-amber-500",
      articleSlug: "testinglink",
    },
  ];
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
          {datas.map((value, index) => (
            <Table.Row
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
              key={index}
            >
              <Table.Cell className="!p-6 ">{index}</Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                <div className={"col-span-3 flex items-center gap-4"}>
                  <Image
                    src={value.articleImage}
                    alt={"unsplash images"}
                    width={60}
                    height={60}
                    className={"rounded-lg shadow-lg"}
                    style={{ width: "auto", height: "auto" }}
                  />
                  <Link
                    href={`/article/${value.articleSlug}`}
                    className={"text-gray-500 font-bold"}
                    target={"_blank"}
                  >
                    {value.articleTitle}
                  </Link>
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className={"flex items-center"}>
                  <img
                    src={value.articleImage}
                    alt={"unsplash images"}
                    className={"rounded-full shadow-lg  h-[40px] w-[40px]"}
                  />
                  <p className={"ml-2 font-bold"}>Alexandre</p>
                </div>
              </Table.Cell>
              <Table.Cell>{value.postDate}</Table.Cell>
              <Table.Cell>{value.category}</Table.Cell>
              <Table.Cell>{value.like}</Table.Cell>
              <Table.Cell>{value.shared}</Table.Cell>
              <Table.Cell>{value.viewers}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ArticleTable;
