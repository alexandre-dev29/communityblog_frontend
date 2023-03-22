import React from "react";
import { NavSideBarProps } from "../../interfaces/uiTypes";
import { Avatar } from "@mui/material";
import { useGetIdentity } from "@refinedev/core";
import { IUser } from "../../interfaces/users";

const NavBar = ({ sidebarWidth, navBarHeight }: NavSideBarProps) => {
  const { data: user } = useGetIdentity<IUser>();

  return (
    <div
      className={`shadow-md bg-white min-h-[40px] flex items-center `}
      style={{ height: `${navBarHeight}vh`, maxHeight: "60px" }}
    >
      <div
        className={
          "hover:bg-gray-200 transition-all duration-100 cursor-pointer flex justify-center items-center"
        }
        style={{
          width: `${sidebarWidth}px`,
          height: `${navBarHeight}vh`,
          borderRight: "1px solid #D3DAE6",
        }}
      >
        <AcmeLogo />
      </div>
      <div className={"flex items-center px-8 justify-between w-full"}>
        <div className={"flex items-center"}>
          <div className={"pr-4 pb-2 pt-1 border-r-2"}>
            <p className={"bg-teal-400 px-2 py-1 rounded-md"}>{user?.role}</p>
          </div>
          <h2 className={"ml-4"}>{user?.fullName}</h2>
        </div>
        <Avatar alt={`${user?.fullName} avatar`} src={`${user?.avatarImage}`} />
      </div>
    </div>
  );
};

const AcmeLogo = () => (
  <svg
    className=""
    fill="none"
    height="36"
    viewBox="0 0 32 32"
    width="36"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect fill="var(--secondary)" height="100%" rx="16" width="100%" />
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

export default NavBar;
