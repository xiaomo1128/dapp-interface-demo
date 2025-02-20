/*
 * @Author: xianglei
 * @Date: 2025-02-20 05:17:46
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-20 08:51:47
 * @Description:
 */
import PageNotFoundView from "@/components/common/PageNotFoundView";
import MainLayout from "@/layouts/MainLayout";
import DappTest from "@/pages/DappTest";
import Home from "@/pages/Home";
import { RouteObject } from "react-router-dom";

const Routes: RouteObject[] = [];
const mainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "*", element: <PageNotFoundView /> },
    { path: "/", element: <Home /> },
    { path: "/dapp", element: <DappTest /> },
    { path: "404", element: <PageNotFoundView /> },
  ],
};
Routes.push(mainRoutes);
export default Routes;
