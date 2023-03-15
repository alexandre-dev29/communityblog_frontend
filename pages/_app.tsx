import React from "react";
import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import { RefineSnackbarProvider } from "@refinedev/mui";
import { notificationProvider } from "@refinedev/antd";

import routerProvider from "@refinedev/nextjs-router";
import "./global.css";

import { CssBaseline, GlobalStyles } from "@mui/material";
import { ColorModeContextProvider } from "@contexts";
import { authProvider } from "src/utils/authProvider";
import { AppPropsWithLayout } from "../src/types/types";
import { accessControlProvider, dataProvider } from "../src/utils";
import { Oxygen } from "next/font/google";
import DashBoardPage from "./dashboard";
import MyLayout from "@components/layouts/layout";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css";
import Router from "next/router";

const InterFont = Oxygen({ subsets: ["latin"], weight: ["300", "400", "700"] });

const API_URL = "https://api.fake-rest.refine.dev";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const renderComponent = () => {
    console.log(pageProps);
    if (Component.noLayout) {
      return <Component {...pageProps} />;
    }

    return (
      <MyLayout>
        <Component {...pageProps} />
      </MyLayout>
    );
  };

  return (
    <div className={`${InterFont.className}`}>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <Refine
              routerProvider={routerProvider}
              dataProvider={dataProvider(API_URL)}
              notificationProvider={notificationProvider}
              accessControlProvider={accessControlProvider}
              DashboardPage={DashBoardPage}
              resources={[
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
                  list: "/dashboard/posts",
                  create: "/dashboard/posts/create",
                  edit: "/dashboard/posts/edit/:id",
                  show: "/dashboard/posts/show/:id",
                },
                {
                  name: "profile",
                  list: "/dashboard/profile",
                },
              ]}
              authProvider={authProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
              }}
            >
              {renderComponent()}
              <RefineKbar />
            </Refine>
          </RefineSnackbarProvider>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </div>
  );
}

export default MyApp;
