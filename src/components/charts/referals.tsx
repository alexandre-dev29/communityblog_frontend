import React from "react";
import { useList } from "@refinedev/core";
import { ICategory } from "../../interfaces/categories";
import { Skeleton } from "antd";
import myAllFonts from "../../../config/font";

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}

export const propertyReferralsInfo = [
  {
    title: "Flutter Dart",
    percentage: 64,
    color: "#6C5DD3",
  },
  {
    title: "Firebase",
    percentage: 40,
    color: "#7FBA7A",
  },
  {
    title: "PHP",
    percentage: 50,
    color: "#FFCE73",
  },
  {
    title: "Marketing",
    percentage: 80,
    color: "#FFA2C0",
  },
  {
    title: "Others",
    percentage: 15,
    color: "#F45252",
  },
];
const ProgressBar = ({ percentage, title, color }: ProgressBarProps) => (
  <div className={"w-full"}>
    <div className={"flex items-center justify-between"}>
      <p className={"text-sm font-bold text-[#11142d]"}>{title}</p>
      <p className={"text-sm font-bold text-[#11142d]"}>{percentage}</p>
    </div>
    <div className={"mt-2 relative w-full h-[8px] rounded-md bg-[#e4e8ef]"}>
      <div
        style={{ width: `${percentage}%`, backgroundColor: color }}
        className={`absolute h-full rounded-md`}
      />
    </div>
  </div>
);

const PropertyReferals = () => {
  const {
    isLoading,
    data: categories,
    isError,
  } = useList<ICategory>({
    resource: "categories",
  });
  const generateRandomColor = (): string =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return (
    <div
      className={
        "transition-all duration-500 shadow-sm hover:shadow-md p-8 flex flex-col min-w-[490px] rounded-md gap-4 bg-white"
      }
    >
      <p
        className={`${myAllFonts.className} text-lg font-bold text-[#11142d"]`}
      >
        Top Categories
      </p>

      <div className={"my-6 flex flex-col gap-4"}>
        {!isLoading ? (
          categories?.data.map(({ id, categoryName, posts }, index) => (
            <ProgressBar
              key={index}
              title={categoryName}
              percentage={posts.length}
              color={generateRandomColor()}
            />
          ))
        ) : (
          <>
            <Skeleton.Input active={isLoading} className={"w-full"} />
            <Skeleton.Input active={isLoading} className={"w-full"} />
            <Skeleton.Input active={isLoading} className={"w-full"} />
          </>
        )}
      </div>
    </div>
  );
};

export default PropertyReferals;
