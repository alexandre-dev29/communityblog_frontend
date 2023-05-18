import React from "react";
import { Spin } from "antd";

interface IDefaultButtonProps {
  isFull: boolean;
  isLoading?: boolean;
  text: string;
  customClass?: string;
  type: "button" | "submit" | "reset" | undefined;
}

const DefaultButton = ({
  isFull,
  text,
  type,
  isLoading,
  customClass,
}: IDefaultButtonProps) => {
  return (
    <button
      type={type}
      className={`${
        isFull && "w-full"
      } text-white bg-teal-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 ${customClass}`}
    >
      {isLoading ? <Spin /> : text}
    </button>
  );
};

export default DefaultButton;
