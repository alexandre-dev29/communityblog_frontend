import Link from "next/link";
import { Avatar } from "flowbite-react";
import Image from "next/image";
import { IPost } from "../../interfaces/posts";

const FeaturedArticle = ({
  featuredPost,
  blurImage,
}: {
  featuredPost: IPost;
  blurImage: any;
}) => {
  return (
    <article className={"grid grid-cols-12 items-center"}>
      <div
        className={
          "col-span-12 md:col-start-1 md:col-end-7 flex flex-col order-1 gap-4"
        }
      >
        <header className={"flex flex-col gap-2 md:gap-4"}>
          <Link
            className={"font-bold text-gdgBlue text-lg lg:text-xl 2xl:text-2xl"}
            href={`/category/${featuredPost.Category?.categorySlug}`}
          >
            {featuredPost.Category?.categoryName}
          </Link>
          <Link href={`/post/${featuredPost.postSlug}`}>
            <h1
              className={
                "font-extrabold text-xl md:text-2xl xl:text-3xl 2xl:text-5xl text-blue-900 "
              }
            >
              {featuredPost.postTitle}
            </h1>
          </Link>

          <p className={"font-light text-sm md:text-base lg:text-xl"}>
            {featuredPost.postDescription}
          </p>
        </header>
        <footer className={"flex items-center gap-4"}>
          <Avatar
            rounded={true}
            img={(props) => (
              <img
                width={"50px"}
                height={"50px"}
                referrerPolicy="no-referrer"
                className={"rounded-full w-[40px] md:w-[50px]"}
                src={featuredPost.author?.avatarImage}
                alt={`${featuredPost.author.fullName} profile image`}
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
      <div
        className={
          "col-span-12 md:col-start-8 md:col-end-12 w-full md:order-2 md:block"
        }
      >
        <Image
          width={800}
          height={350}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={`${featuredPost.postTitle} image`}
          src={featuredPost.postMainImage}
          placeholder={"blur"}
          blurDataURL={blurImage}
          className={"rounded-xl lg:rounded-2xl"}
        />
      </div>
    </article>
  );
};

export default FeaturedArticle;
