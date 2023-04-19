import React from "react";

import "./global.css";
import "./markdown.css";
import { AppPropsWithLayout } from "../src/types/types";
import MyLayout from "@components/layouts/layout";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import RefineConfig from "../config/refineConfig";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Authenticated } from "@refinedev/core";
import SimpleLayout from "@components/layouts/SimpleLayout";
import myAllFonts from "../config/font";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const renderComponent = () => {
    if (Component.noLayout) {
      return (
        <SimpleLayout>
          <Component {...pageProps} />
        </SimpleLayout>
      );
    }

    return (
      <MyLayout>
        <Authenticated v3LegacyAuthProviderCompatible={false}>
          <Component {...pageProps} />
        </Authenticated>
      </MyLayout>
    );
  };

  return (
    <div className={`${myAllFonts.className}`}>
      <NextThemesProvider
        attribute={"class"}
        themes={["light"]}
        defaultTheme={"light"}
      >
        <RefineConfig>{renderComponent()}</RefineConfig>
      </NextThemesProvider>
    </div>
  );
}

export default MyApp;
