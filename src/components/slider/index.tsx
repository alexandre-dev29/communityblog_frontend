import React, { useState } from "react";
import {
  CanAccess,
  ITreeMenu,
  useIsExistAuthentication,
  useLogout,
  useMenu,
  useRefineContext,
} from "@refinedev/core";
import { Sider } from "@refinedev/antd";
import { Grid, Layout as AntdLayout, Menu } from "antd";
import { DashboardOutlined, UnorderedListOutlined } from "@ant-design/icons";
import Link from "next/link";
import { LogoutSharp } from "@mui/icons-material";

export const CustomSider: typeof Sider = ({ render }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const isExistAuthentication = useIsExistAuthentication();
  const { mutate: mutateLogout } = useLogout();
  const { menuItems, selectedKey, defaultOpenKeys } = useMenu();
  const { hasDashboard } = useRefineContext();
  const { SubMenu } = Menu;

  const breakpoint = Grid.useBreakpoint();

  const isMobile =
    typeof breakpoint.lg === "undefined" ? false : !breakpoint.lg;

  const renderTreeView = (tree: ITreeMenu[], selectedKey: string) => {
    return tree.map((item: ITreeMenu) => {
      const { route, name, children, meta, options } = item;

      if (children.length > 0) {
        return (
          <SubMenu
            key={route}
            icon={meta?.icon ?? <UnorderedListOutlined />}
            title={meta?.label}
          >
            {renderTreeView(children, selectedKey)}
          </SubMenu>
        );
      }
      const isSelected = route === selectedKey;
      const isRoute = !(
        (meta?.parent ?? options?.parent ?? meta?.parent) !== undefined &&
        children.length === 0
      );
      return (
        <CanAccess
          key={route}
          resource={name.toLowerCase()}
          action="list"
          params={{ resource: item }}
        >
          <Menu.Item
            key={route}
            style={{
              fontWeight: isSelected ? "bold" : "normal",
            }}
            className={`${
              isSelected
                ? "bg-myPrimary text-white shadow-md shadow-myPrimary"
                : "bg-transparent"
            } rounded-md`}
            icon={meta?.icon ?? (isRoute && <UnorderedListOutlined />)}
          >
            {route ? (
              <Link className={"ml-2"} href={route}>
                {meta?.label}
              </Link>
            ) : (
              meta?.label
            )}
            {!collapsed && isSelected && (
              <div className="ant-menu-tree-arrow" />
            )}
          </Menu.Item>
        </CanAccess>
      );
    });
  };

  const logout = isExistAuthentication && (
    <Menu.Item
      key="logout"
      onClick={() => mutateLogout()}
      icon={<LogoutSharp />}
    >
      Logout
    </Menu.Item>
  );

  const dashboard = hasDashboard ? (
    <Menu.Item
      key="dashboard"
      style={{
        fontWeight: selectedKey === "/" ? "bold" : "normal",
      }}
      icon={<DashboardOutlined />}
    >
      <Link href="/dashboard" className={"ml-2"}>
        DashBoard
      </Link>
      {!collapsed && selectedKey === "/" && (
        <div className="ant-menu-tree-arrow" />
      )}
    </Menu.Item>
  ) : null;

  const items = renderTreeView(menuItems, selectedKey);

  const renderSider = () => {
    if (render) {
      return render({
        dashboard,
        items,
        logout,
        collapsed,
      });
    }
    return (
      <>
        {dashboard}
        {items}
        {logout}
      </>
    );
  };

  return (
    <AntdLayout.Sider
      collapsedWidth={isMobile ? 0 : 80}
      collapsed={collapsed}
      breakpoint="lg"
      onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}
      theme={"light"}
      className={"px-4"}
    >
      <Link href="/">
        {collapsed ? (
          <h2>Blog</h2>
        ) : (
          <div className={"p-4"}>
            <h2
              className={
                "text-4xl font-bold text-center uppercase text-myPrimary"
              }
            >
              Blog
            </h2>
          </div>
        )}
      </Link>
      <Menu
        theme="light"
        defaultOpenKeys={defaultOpenKeys}
        selectedKeys={[selectedKey]}
        className={"border-0"}
        mode="inline"
      >
        {renderSider()}
      </Menu>
    </AntdLayout.Sider>
  );
};
