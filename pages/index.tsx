import { GetServerSideProps } from "next";
import { axiosInstance, dataProvider } from "../src/utils";
import { parseTableParams } from "@refinedev/nextjs-router";
import { API_URL } from "../src/constants/constants";
import { GetListResponse } from "@refinedev/core";
import { IPost } from "../src/interfaces/posts";
import React, { useState } from "react";
import { ICategory } from "../src/interfaces/categories";
import FeaturedArticle from "@components/mainPage/featuredArticle";
import MainArticleCard from "@components/mainPage/mainArticleCard";
import { ImFilesEmpty } from "react-icons/im";

export default function Home({
  postsData,
  categoriesData,
}: {
  postsData: GetListResponse<IPost>;
  categoriesData: GetListResponse<ICategory>;
}) {
  const featuredArticle = postsData.data.filter((value) => value.isFeatured)[0];
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Categories");
  const [listOfArticles, setListOfArticles] = useState<IPost[]>(postsData.data);
  const listofCategories = [
    "All Categories",
    ...categoriesData.data.map((value) => value.categoryName),
  ];

  return (
    <div className={"min-h-screen bg-gray-100  pb-28"}>
      <section
        className={
          "bg-white pb-8 px-6 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:py-20 xl:px-28"
        }
      >
        <FeaturedArticle featuredPost={featuredArticle} />
      </section>
      <section
        className={
          "w-11/12 xl:w-[85%] mx-auto pt-8 pb-4 border-b-2  flex items-center gap-2 md:gap-8  border-gray-300 overflow-hidden"
        }
      >
        {listofCategories.map((value, index) => (
          <p
            className={`text-[11px] md:text-lg uppercase font-bold cursor-pointer hover:text-gdgGreen transition-all duration-500 ${
              value === selectedCategory ? "text-gdgBlue" : "text-blue-900"
            }`}
            key={index}
            onClick={() => {
              console.log(value);
              setSelectedCategory(value);
              value === "All Categories"
                ? setListOfArticles(postsData.data)
                : setListOfArticles(
                    postsData.data.filter(
                      (value1) => value1.Category?.categoryName === value
                    )
                  );
            }}
          >
            {value}
          </p>
        ))}
      </section>
      <section className={"w-11/12 xl:w-[85%] mx-auto mt-4"}>
        <div
          className={
            "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16 lg:gap-x-16 md:gap-x-12"
          }
        >
          {listOfArticles.length === 0 ? (
            <div
              className={
                "flex w-full h-72 justify-center items-center col-span-1 md:col-span-2 lg:col-span-3 "
              }
            >
              <p
                className={
                  "p-4 md:p-16 flex gap-8 items-center text-xl md:text-4xl font-bold text-blue-900"
                }
              >
                <ImFilesEmpty />
                Sorry there is no post for {selectedCategory}
              </p>
            </div>
          ) : (
            listOfArticles.map((value) => (
              <MainArticleCard articleData={value} key={value.id} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}
Home.noLayout = true;

export const getServerSideProps: GetServerSideProps<{}> = async (context) => {
  const { pagination, filters, sorters } = parseTableParams(
    context.resolvedUrl?.split("?")[1] ?? ""
  );

  const data = await dataProvider(
    API_URL,
    axiosInstance,
    context.req.headers.cookie === undefined ? "" : context.req.headers.cookie
  ).getList({
    resource: "posts",
    filters,
    pagination,
    sorters,
  });

  const categories = await dataProvider(
    API_URL,
    axiosInstance,
    context.req.headers.cookie === undefined ? "" : context.req.headers.cookie
  ).getList({
    resource: "categories",
    filters,
    pagination,
    sorters,
  });
  return {
    props: { postsData: data, categoriesData: categories },
  };
};
