import { AlbumList, HomeUser, UserCircle } from "iconoir-react";
import { sideBarItem } from "../../interfaces/uiTypes";
import { DashboardOutlined, FileAddOutlined } from "@ant-design/icons";

export const firstMenuList: sideBarItem[] = [
  {
    IconElement: DashboardOutlined,
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    IconElement: HomeUser,
    text: "Users",
    link: "/dashboard/users",
  },
  { IconElement: AlbumList, text: "Posts", link: "/dashboard/posts" },
  {
    IconElement: FileAddOutlined,
    text: "Categories",
    link: "/dashboard/categories",
  },
  { IconElement: UserCircle, text: "Profile", link: "/dashboard/profile" },
];
