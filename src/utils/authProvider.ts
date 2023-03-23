import { AuthBindings } from "@refinedev/core";
import nookies from "nookies";
import { axiosInstance } from "./axiosInstance";
import { API_URL } from "../constants/constants";
import { IAuthResponse, ResponseTypeEnum } from "../interfaces/uiTypes";

const httpClient = axiosInstance;

export const authProvider: AuthBindings = {
  login: async ({ email, password }) => {
    const { data } = await httpClient.post<IAuthResponse>(
      `${API_URL}/users/loginUser`,
      {
        email,
        password,
      }
    );
    if (data.responseType === ResponseTypeEnum.SUCCESS) {
      nookies.set(null, "auth", JSON.stringify(data.data), {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
      return {
        success: true,
        redirectTo: "/",
      };
    }

    return {
      success: false,
      error: {
        name: "LoginError",
        message: "Invalid username or password",
      },
    };
  },
  logout: async () => {
    nookies.destroy(null, "auth");
    const { data } = await httpClient.post<IAuthResponse>(
      `${API_URL}/users/logoutUser`
    );
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async (ctx: any) => {
    const cookies = nookies.get(ctx);
    if (cookies["auth"] !== null && cookies["token"] !== null) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      logout: true,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => {
    const auth = nookies.get()["auth"];
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return parsedUser.roles;
    }
    return null;
  },
  getIdentity: async () => {
    const auth = nookies.get()["auth"];
    if (auth) {
      const parsedUser = JSON.parse(auth);
      return parsedUser;
    }
    return null;
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
};
