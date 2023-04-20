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
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { IPost } from "../../src/interfaces/posts";
import Link from "next/link";
import Head from "next/head";
import { Image } from "antd";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

const components = {
  Head: Head,
  Link: Link,
  Image: Image,
  img: (props: any) => <Image {...props} />,
};

interface IPostSlugPageData {
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  postData: IPost;
}

const PostSlug = ({ mdxSource, postData }: IPostSlugPageData) => {
  return (
    <div className={"max-w-7xl px-8 py-4 mx-auto"}>
      <article className="prose dark:prose-dark">
        <MDXRemote {...mdxSource} components={components} />
      </article>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const currentPost = await dataProvider(
    API_URL,
    axiosInstance,
    context.req.headers.cookie === undefined ? "" : context.req.headers.cookie
  ).custom({
    url: `${API_URL}/posts/getPosts/getPostsBySlug`,
    method: "get",
    query: { slug: `${context.params?.slug}` },
  });
  const { content, data } = matter(currentPost.data.postContent);

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
    },
  };
};

PostSlug.noLayout = true;
export default PostSlug;
