import React from "react";

import "./global.css";
import { AppPropsWithLayout } from "../src/types/types";
import { Montserrat } from "next/font/google";
import MyLayout from "@components/layouts/layout";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import RefineConfig from "../config/refineConfig";

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
        <Component {...pageProps} />
      </MyLayout>
    );
  };

  return (
    <div className={`${InterFont.className}`}>
      <RefineConfig>{renderComponent()}</RefineConfig>
    </div>
  );
}

export default MyApp;
