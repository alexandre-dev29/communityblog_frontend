import React from "react";
import { NavSideBarProps } from "../../interfaces/uiTypes";
import { Avatar } from "@mui/material";
import { useGetIdentity } from "@refinedev/core";
import { IUser } from "../../interfaces/users";
import { gdgLogo } from "src/assets";
import Image from "next/image";
import Link from "next/link";

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
        <Link href={"/"}>
          <Image src={gdgLogo} alt={"logo GDG"} width={40} height={40} />
        </Link>
      </div>
      <div className={"flex items-center px-8 justify-between w-full"}>
        <div className={"flex items-center"}>
          <div className={"pr-4 pb-2 pt-1 border-r-2"}>
            <p className={"bg-gdgYellow text-white px-2 py-1 rounded-md"}>
              {user?.role}
            </p>
          </div>
          <h2 className={"ml-4"}>{user?.fullName}</h2>
        </div>
        <Avatar alt={`${user?.fullName} avatar`} src={`${user?.avatarImage}`} />
      </div>
    </div>
  );
};

export default NavBar;
