import React from "react";

import "./global.css";
import "./markdown.css";
import { AppPropsWithLayout } from "../src/types/types";
import { Montserrat } from "next/font/google";
import MyLayout from "@components/layouts/layout";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import RefineConfig from "../config/refineConfig";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Authenticated } from "@refinedev/core";

const InterFont = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900", "800"],
});

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const renderComponent = () => {
    if (Component.noLayout) {
      return <Component {...pageProps} />;
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
    <div className={`${InterFont.className}`}>
      <NextThemesProvider
        attribute={"class"}
        themes={["light", "dark"]}
        defaultTheme={"dark"}
      >
        <RefineConfig>{renderComponent()}</RefineConfig>
      </NextThemesProvider>
    </div>
  );
}

export default MyApp;
