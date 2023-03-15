import { HomeUser, UserCircle } from "iconoir-react";
import {
  ArticleTwoTone,
  CategoryTwoTone,
  DashboardCustomizeTwoTone,
} from "@mui/icons-material";
import { sideBarItem } from "../../interfaces/uiTypes";

export const firstMenuList: sideBarItem[] = [
  {
    IconElement: DashboardCustomizeTwoTone,
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    IconElement: HomeUser,
    text: "Users",
    link: "/dashboard/users",
  },
  { IconElement: ArticleTwoTone, text: "Posts", link: "/dashboard/posts" },
  {
    IconElement: CategoryTwoTone,
    text: "Categories",
    link: "/dashboard/categories",
  },
  { IconElement: UserCircle, text: "Profile", link: "/dashboard/profile" },
];
