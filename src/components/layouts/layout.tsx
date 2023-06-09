import React from "react";
import NavBar from "@components/navBar";
import Sidebar from "@components/sideBar";
import myAllFonts from "../../../config/font";

export const MyLayout = ({ children }: { children: React.ReactNode }) => {
  const sideBardWidth: number = 60;
  const navBarHeight: number = 8;
  return (
    <div
      className={myAllFonts.className}
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "rgb(248,248,248)",
      }}
    >
      <div className={"flex flex-col"}>
        <NavBar sidebarWidth={sideBardWidth} navBarHeight={navBarHeight} />

        <div className={"w-full flex justify-center"}>
          <Sidebar sidebarWidth={sideBardWidth} navBarHeight={navBarHeight} />
          <main
            className={"p-4 h-full w-[96vw]"}
            style={{ height: `${100 - navBarHeight}vh` }}
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MyLayout;
