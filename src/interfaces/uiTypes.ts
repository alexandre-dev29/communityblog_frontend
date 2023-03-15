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
