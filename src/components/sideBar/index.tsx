import React from "react";
import { firstMenuList } from "./datas";

import { NavSideBarProps } from "../../interfaces/uiTypes";
import { Tooltip } from "@mui/material";
import { LogoutTwoTone } from "@mui/icons-material";
import Link from "next/link";
import { useAppSelectedMenuState } from "../../../states/mainStates";
import { CanAccess, useLogout } from "@refinedev/core";

export const Sidebar = ({ sidebarWidth, navBarHeight }: NavSideBarProps) => {
  const { menuSelected, setSelectedMenu } = useAppSelectedMenuState();
  const { mutate: mutateLogout } = useLogout();
  return (
    <div className={"flex"}>
      <aside
        className={`shadow-md bg-white z-40`}
        style={{
          borderTop: "1px solid #D3DAE6",
          height: `94vh`,
          left: 0,
          top: "50px",
          position: "sticky",
          width: `${sidebarWidth - 1}px`,
        }}
      >
        <div className={""}>
          <div className={"flex items-center"}>
            <ul
              className={
                "flex flex-col justify-between items-center w-full h-[80px]"
              }
            >
              {firstMenuList.map((element, index) => (
                <CanAccess
                  key={index}
                  action={""}
                  resource={element.text.toLowerCase()}
                  params={{ resource: { name: element.text.toLowerCase() } }}
                >
                  <Tooltip title={element.text} placement={"right"} key={index}>
                    <li
                      className={"cursor-pointer mt-10"}
                      onClick={() => {
                        setSelectedMenu(element.text);
                      }}
                    >
                      <Link href={element.link}>
                        {
                          <element.IconElement
                            className={`${
                              element.text == menuSelected
                                ? "text-myPrimary scale-150"
                                : ""
                            } transition-all duration-500`}
                          />
                        }
                      </Link>
                    </li>
                  </Tooltip>
                </CanAccess>
              ))}
              <Tooltip title={"logout"} key={"logout"}>
                <li
                  className={"cursor-pointer mt-10"}
                  onClick={() => mutateLogout()}
                >
                  <LogoutTwoTone />
                </li>
              </Tooltip>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
