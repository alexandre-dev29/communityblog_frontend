import { IUser } from "./users";

export enum ResponseTypeEnum {
  SUCCESS,
  ERROR,
}

export interface IAuthResponse {
  responseType: ResponseTypeEnum;
  message: string;
  refreshToken: string;
  data: IUser;
}

export type NavSideBarProps = {
  sidebarWidth: number;
  navBarHeight: number;
};

export type sideBarItem = {
  text: string;
  IconElement: any;
  link: string;
};
export type DrawerItem = {
  name: string;
  listLinks: { linkName: string; link: string; linkIcon: any }[];
};
