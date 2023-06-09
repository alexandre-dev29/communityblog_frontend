import React from "react";
import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router";
import {
  accessControlProvider,
  authProvider,
  dataProvider,
} from "../src/utils";
import { notificationProvider } from "@refinedev/antd";
import { resourceDatas } from "./resourceDatas";
import { API_URL } from "../src/constants/constants";

const RefineConfig = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Refine
        routerProvider={routerProvider}
        dataProvider={dataProvider(API_URL)}
        notificationProvider={notificationProvider}
        accessControlProvider={accessControlProvider}
        resources={resourceDatas}
        authProvider={authProvider}
        options={{
          syncWithLocation: true,
          warnWhenUnsavedChanges: true,
        }}
      >
        {children}
      </Refine>
    </div>
  );
};

export default RefineConfig;
