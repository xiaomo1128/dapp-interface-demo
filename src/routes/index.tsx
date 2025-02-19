/*
 * @Author: xianglei
 * @Date: 2025-02-17 10:29:00
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-17 11:05:52
 * @FilePath: \src\routes\index.tsx
 * @Description: 
 */
import PageNotFoundView from "@/components/common/PageNotFoundView";
import MainLayout from "@/layouts/Layout";
import DappTest from "@/pages/DappTest";
import Home from "@/pages/Home";
import { RouteObject } from "react-router-dom";

const Routes: RouteObject[] = [];

const mainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    { path: "*", element: <PageNotFoundView /> },
    { path: "/dapp", element: <DappTest /> },
    { path: "/", element: <Home /> },
    { path: "404", element: <PageNotFoundView /> },
  ],
};
Routes.push(mainRoutes);

export default Routes;
