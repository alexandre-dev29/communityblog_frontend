import { sideBarItem } from "../../interfaces/uiTypes";
import { DashboardOutlined, FileAddOutlined } from "@ant-design/icons";
import { Document, People, User } from "react-iconly";

export const firstMenuList: sideBarItem[] = [
  {
    IconElement: DashboardOutlined,
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    IconElement: People,
    text: "Users",
    link: "/dashboard/users",
  },
  { IconElement: Document, text: "Posts", link: "/dashboard/post" },
  {
    IconElement: FileAddOutlined,
    text: "Categories",
    link: "/dashboard/categories",
  },
  { IconElement: User, text: "Profile", link: "/dashboard/profile" },
];
