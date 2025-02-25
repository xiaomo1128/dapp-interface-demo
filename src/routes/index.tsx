/*
 * @Author: xianglei
 * @Date: 2025-02-20 05:17:46
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-20 08:51:47
 * @Description:
 */
import Loading from "@/components/common/Loading";
import PageNotFoundView from "@/components/common/PageNotFoundView";
import MainLayout from "@/layouts/MainLayout";
import DappTest from "@/pages/DappTest";
import Home from "@/pages/Home";
import { lazy, Suspense } from "react";
import { RouteObject } from "react-router-dom";

const Layout = () => (
  <Suspense fallback={<Loading />}>
    <MainLayout />
  </Suspense>
);

const Test = lazy(() => import("@/components/common/Test"));

const Routes: RouteObject[] = [];
const mainRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    { path: "*", element: <PageNotFoundView /> },
    { path: "/", element: <Home /> },
    { path: "/dapp", element: <DappTest /> },
    { path: "404", element: <PageNotFoundView /> },
  ],
};

const DemoRoutes = {
  path: "demo",
  element: <Layout />,
  children: [
    { path: "test", element: <Test /> },
  ],
};

Routes.push(mainRoutes, DemoRoutes);
export default Routes;
