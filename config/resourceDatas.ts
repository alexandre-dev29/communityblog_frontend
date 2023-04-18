import { ResourceProps } from "@refinedev/core";

export const resourceDatas: ResourceProps[] | undefined = [
  {
    name: "users",
    list: "/dashboard/users",
    create: "/dashboard/users/create",
    edit: "/dashboard/users/edit/:id",
    show: "/dashboard/users/show/:id",
  },
  {
    name: "categories",
    list: "/dashboard/categories",
    create: "/dashboard/categories/create",
    edit: "/dashboard/categories/edit/:id",
    show: "/dashboard/categories/show/:id",
  },
  {
    name: "posts",
    list: "/dashboard/post",
    create: "/dashboard/post/create",
    edit: "/dashboard/post/edit/:id",
    show: "/dashboard/post/show/:id",
  },
  {
    name: "profile",
    list: "/dashboard/profile",
  },
];
