import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <div className={"w-full"}>
      <h4 className={"font-extrabold text-gray-800 "}>Recent Article</h4>
      <div id="tableHeader " className={"flex mt-4"}>
        <p className={"text-gray-500 font-bold px-1"}>No</p>
        <div className={"grid grid-cols-8 gap-8 ml-6 w-full"}>
          <p className={"col-span-3 text-gray-500 font-bold "}>Article Title</p>
          <p className={" text-gray-500 font-bold"}>Post Date</p>
          <p className={" text-gray-500 font-bold text-center"}>Category</p>
          <p className={" text-gray-500 font-bold"}>Likes</p>
          <p className={" text-gray-500 font-bold"}>shared</p>
          <p className={"text-gray-500 font-bold "}>Viewers</p>
        </div>
      </div>
      {datas.map((value, index) => (
        <div
          className={`flex items-center ${index === 0 ? "mt-6" : "mt-5"} `}
          key={index}
        >
          <p className={"px-2 rounded-md text-center bg-blue-500 text-white"}>
            {index + 1}
          </p>
          <div className={"grid grid-cols-8 gap-8 ml-6 w-full items-center"}>
            <div className={"col-span-3 flex items-center gap-4"}>
              <Image
                src={value.articleImage}
                alt={"unsplash images"}
                width={100}
                height={100}
                className={"rounded-lg shadow-lg"}
              />
              <Link
                href={`/article/${value.articleSlug}`}
                className={"text-gray-500 font-bold"}
                target={"_blank"}
              >
                {value.articleTitle}
              </Link>
            </div>
            <p className={"text-gray-500 "}>{value.postDate}</p>
            <p
              className={`inline px-2 py-2 justify-self-center text-white text-center rounded-lg ${value.categoryColor}`}
            >
              {value.category}
            </p>
            <p className={"text-gray-500 font-bold"}>{value.like}</p>
            <p className={"text-gray-500 font-bold"}>{value.shared}</p>
            <p className={"text-gray-500 font-bold"}>{value.viewers}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleTable;
