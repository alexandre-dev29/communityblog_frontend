import React from "react";
import { Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";
import {
  Layout,
  notificationProvider,
  RefineSnackbarProvider,
} from "@refinedev/mui";
import routerProvider from "@refinedev/nextjs-router";
import "./global.css";

import { CssBaseline, GlobalStyles } from "@mui/material";
import { ColorModeContextProvider } from "@contexts";
import { Header } from "@components/header";
import { authProvider } from "src/utils/authProvider";
import { AppPropsWithLayout } from "../src/types/types";
import { dataProvider } from "../src/utils";

const API_URL = "https://api.fake-rest.refine.dev";

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const renderComponent = () => {
    if (Component.noLayout) {
      return <Component {...pageProps} />;
    }

    return (
      <Layout Header={Header}>
        <Component {...pageProps} />
      </Layout>
    );
  };

  return (
    <>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <CssBaseline />
          <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
          <RefineSnackbarProvider>
            <Refine
              routerProvider={routerProvider}
              dataProvider={dataProvider(API_URL)}
              notificationProvider={notificationProvider}
              resources={[
                {
                  name: "products",
                  list: "/products",
                  create: "/products/create",
                  edit: "/products/edit/:id",
                  show: "/products/show/:id",
                  canDelete: true,
                },
                {
                  name: "categories",
                  list: "/categories",
                  create: "/categories/create",
                  edit: "/categories/edit/:id",
                  show: "/categories/show/:id",
                  canDelete: true,
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
    </>
  );
}

export default MyApp;
