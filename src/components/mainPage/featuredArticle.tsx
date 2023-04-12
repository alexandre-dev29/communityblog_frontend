import Link from "next/link";
import { Avatar } from "flowbite-react";
import { Image, Skeleton } from "antd";
import { IPost } from "../../interfaces/posts";

const FeaturedArticle = ({ featuredPost }: { featuredPost: IPost }) => {
  return (
    <article className={"grid grid-cols-12 items-center"}>
      <div className={"col-start-1 col-end-7 flex flex-col gap-4"}>
        <header className={"flex flex-col gap-4"}>
          <Link
            className={"font-bold text-gdgBlue text-lg"}
            href={`/category/${featuredPost.Category?.categorySlug}`}
          >
            {featuredPost.Category?.categoryName}
          </Link>
          <Link href={`/post/${featuredPost.postSlug}`}>
            <h1 className={"font-extrabold text-5xl text-blue-900"}>
              {featuredPost.postTitle}
            </h1>
          </Link>

          <p className={"font-light text-xl"}>{featuredPost.postDescription}</p>
        </header>
        <footer className={"flex items-center gap-4"}>
          <Avatar
            rounded={true}
            img={(props) => (
              <img
                referrerPolicy="no-referrer"
                className={"rounded-full w-[50px]"}
                src={featuredPost.author?.avatarImage}
              />
            )}
          />
          <div className={"flex items-center"}>
            <p className={"font-bold text-gdgGreen "}>
              {featuredPost.author.fullName}
            </p>
            <span className={"mx-3.5 block h-5 w-1 bg-gray-400"}></span>
            <p className={""}>{`${new Date(
              `${featuredPost.publishedAt}`
            ).toLocaleDateString()}`}</p>
          </div>
        </footer>
      </div>
      <div className={"col-start-8 col-end-12 w-full md:order-1 md:block"}>
        <Image
          placeholder={
            <Skeleton.Image active={true} className={"w-full min-h-[300px]"} />
          }
          alt="post Image"
          src={featuredPost.postMainImage}
          className={"rounded-2xl"}
        />
      </div>
    </article>
  );
};

export default FeaturedArticle;
