import { GetServerSideProps } from "next";
import { axiosInstance, dataProvider } from "../../src/utils";
import { API_URL } from "../../src/constants/constants";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import matter from "gray-matter";
import rehypeCodeTitles from "rehype-code-titles";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { IPostSlugPageData } from "../../src/interfaces/posts";
import cookie from "cookie";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

import PostSlugHead from "@components/common/PostSlugHead";
import mdxComponents from "@components/common/MdxComponents";
import SeoData from "@components/common/SeoData";
import React from "react";
import lqipModern from "lqip-modern";

const PostSlug = ({
  mdxSource,
  postData,
  mainImagePreview,
}: IPostSlugPageData) => {
  return (
    <div
      className={"max-w-7xl px-4 md:px-12 lg:px-20 xl:px-24 mx-auto bg-white"}
    >
      <SeoData
        isAPost={true}
        siteDescription={""}
        authorOfTheSite={"Axel Mwenze"}
        postData={postData}
      />
      <PostSlugHead postData={postData} imagePreview={mainImagePreview} />
      <article className="prose dark:prose-dark">
        <MDXRemote {...mdxSource} components={mdxComponents} />
      </article>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  const currentPost: any = await dataProvider(
    API_URL,
    axiosInstance,
    context.req.headers.cookie === undefined ? "" : context.req.headers.cookie
  ).custom({
    url: `${API_URL}/posts/getPosts/getPostsBySlug`,
    method: "get",
    query: { slug: `${context.params?.slug}` },
  });
  if (currentPost.sessionId) {
    const myCookie = cookie.serialize("session-id", currentPost.sessionId, {
      maxAge: 3600,
      path: "/",
      httpOnly: true,
    });
    context.res.setHeader("Set-Cookie", myCookie);
  }
  const { content, data } = matter(currentPost.data.postContent);

  const image = await fetch(currentPost.data.postMainImage);
  const imageBuffer = Buffer.from(await image.arrayBuffer());
  const previewImage = await lqipModern(imageBuffer);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ["wrap"],
            },
          },
        ],
        rehypeHighlight,
        require("rehype-accessible-emojis").rehypeAccessibleEmojis,
      ],
      format: "mdx",
    },
    scope: data,
  });
  return {
    props: {
      mdxSource: mdxSource,
      postData: currentPost.data,
      mainImagePreview: previewImage.metadata.dataURIBase64,
    },
  };
};

PostSlug.noLayout = true;
export default PostSlug;
