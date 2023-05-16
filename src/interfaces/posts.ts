import { ITags as Tags } from "./tags";
import { IUser as Users } from "./users";
import { ICategory as Categories } from "./categories";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface IPost {
  id: string;

  postTitle: string;

  postDescription: string;

  postViewCount: number;
  postReadTime: number;
  postTotalLikes: number;
  postTotalShares: number;

  postSlug: string;

  postMainImage: string;

  authorId: string;

  Tags: Tags[];

  isPublished: boolean;

  isFeatured: boolean;

  publishedAt?: Date;

  postContent: string;

  author: Users;

  createdAt: Date;

  updatedAt: Date;

  Category?: Categories;

  categoryId?: string;
}

export interface IPostSlugPageData {
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, unknown>
  >;
  postData: IPost;
}
