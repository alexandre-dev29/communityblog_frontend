import React from "react";
import Link from "next/link";
import { Avatar } from "flowbite-react";
import ShareBar from "@components/common/ShareBar";
import { IPost } from "../../interfaces/posts";
import Image from "next/image";
import CustomIMainImage from "@components/common/CustomImage";

const PostSlugHead = ({
  postData,
  imagePreview,
}: {
  postData: IPost;
  imagePreview: any;
}) => {
  return (
    <div className={" flex flex-col gap-6 py-2"}>
      <Link
        href={"/"}
        className={"bg-gdgYellow w-fit px-4 py-4 rounded-full text-white "}
      >
        {postData.Category?.categoryName}
      </Link>
      <h1
        className={"font-bold text-black text-3xl xl:text-6xl dark:text-white"}
      >
        {postData.postTitle}
      </h1>
      <div className={"flex justify-between items-center"}>
        <div className={"flex items-center gap-2"}>
          <picture>
            <Avatar
              rounded={true}
              img={(props) => (
                <Image
                  referrerPolicy="no-referrer"
                  className={"rounded-full w-[40px] md:w-[50px]"}
                  src={`${postData.author?.avatarImage}`}
                  alt={`${postData.author.fullName} profile`}
                  width={50}
                  height={50}
                />
              )}
            />
          </picture>
          <div className={"ml-2"}>
            <p>{`${new Date(`${postData?.publishedAt}`).toLocaleDateString(
              "en-CA"
            )}`}</p>
            <p className={"text-black font-bold"}>
              <span className={"text-slate-500"}>
                {postData.author.fullName}
              </span>
            </p>
          </div>
        </div>
        <p>{`${postData.postReadTime} Min read`}</p>
      </div>
      <ShareBar postData={postData} />
      <CustomIMainImage
        postTitle={postData.postTitle}
        postImageSrc={postData.postMainImage}
        blurImage={imagePreview}
        hasBlurImage={true}
        customClassName={"rounded-xl lg:rounded-2xl"}
        customWidth={1400}
        customHeight={600}
      />
    </div>
  );
};

export default PostSlugHead;
