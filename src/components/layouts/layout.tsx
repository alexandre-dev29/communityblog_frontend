import React from "react";
import { Oxygen } from "next/font/google";
import NavBar from "@components/navBar";
import Sidebar from "@components/sideBar";

const oxygen = Oxygen({ weight: ["300", "400", "700"], subsets: ["latin"] });
export const MyLayout = ({ children }: { children: React.ReactNode }) => {
  const sideBardWidth: number = 60;
  const navBarHeight: number = 8;
  return (
    <div
      className={oxygen.className}
      style={{ height: "100vh", width: "100%", backgroundColor: "#fafbfd" }}
    >
      <div className={"flex flex-col"}>
        <NavBar sidebarWidth={sideBardWidth} navBarHeight={navBarHeight} />

        <div className={"w-full flex"}>
          <Sidebar sidebarWidth={sideBardWidth} navBarHeight={navBarHeight} />
          <main
            className={"p-4 w-full h-full "}
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
