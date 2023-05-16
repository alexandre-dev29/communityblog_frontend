import { getServerSideSitemapLegacy } from "next-sitemap";
import { GetServerSideProps } from "next";
import { axiosInstance } from "@refinedev/simple-rest";
import { API_URL } from "../../src/constants/constants";
import { IPost } from "../../src/interfaces/posts";
import * as process from "process";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const allPosts = await axiosInstance.get<IPost[]>(`${API_URL}/posts`);

  const fields = allPosts.data.map((values) => {
    return {
      loc: `${process.env.SITE_URL || "http://localhost:3000"}/post/${
        values.postSlug
      }`,
      lastmod: new Date().toISOString(),
    };
  });

  return getServerSideSitemapLegacy(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
