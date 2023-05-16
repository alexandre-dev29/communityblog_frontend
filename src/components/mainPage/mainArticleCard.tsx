import React from "react";
import Link from "next/link";
import { Image, Skeleton } from "antd";
import { Avatar } from "flowbite-react";
import { IPost } from "../../interfaces/posts";

const MainArticleCard = ({ articleData }: { articleData: IPost }) => {
  return (
    <article
      className={
        "flex flex-col bg-white border-2 border-gray-200 shadow-sm transition-all duration-500 hover:shadow-md rounded-t-2xl"
      }
    >
      <Link href={""}>
        <Image
          placeholder={
            <Skeleton.Image active={true} className={"w-full min-h-[300px]"} />
          }
          alt="post Image"
          src={articleData.postMainImage}
          className={"rounded-t-2xl"}
        />
      </Link>
      <div className={"flex grow flex-col p-4 md:p-6 "}>
        <header className={"flex flex-col gap-2"}>
          <Link
            href={`/category/${articleData.Category?.categorySlug}`}
            className={"text-gdgGreen font-bold block"}
          >
            {articleData.Category?.categoryName}
          </Link>
          <Link
            href={`/post/${articleData.postSlug}`}
            className={
              "text-lg md:text-[22px] font-bold leading-denser text-blue-900"
            }
          >
            {articleData.postTitle}
          </Link>
          <p
            className={
              "text-sm md:text-base font-book text-gray-9 line-clamp-3"
            }
          >
            {articleData.postDescription}
          </p>
        </header>
        <footer className={"flex items-center gap-4 mt-4 justify-between"}>
          <div className={"flex items-center gap-4"}>
            <Avatar
              rounded={true}
              img={(props) => (
                <img
                  width={"50px"}
                  height={"50px"}
                  referrerPolicy="no-referrer"
                  className={"rounded-full w-[50px]"}
                  src={articleData.author?.avatarImage}
                  alt={`${articleData.author?.fullName} profile image`}
                />
              )}
            />
            <p className={"text-sm md:text-base font-bold text-gdgBlue "}>
              {articleData.author.fullName}
            </p>
          </div>
          <p className={"text-sm md:text-base"}>{`${new Date(
            `${articleData.publishedAt}`
          ).toLocaleDateString()}`}</p>
        </footer>
      </div>
    </article>
  );
};

export default MainArticleCard;
