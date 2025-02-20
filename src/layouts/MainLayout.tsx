/*
 * @Author: xianglei
 * @Date: 2025-02-20 05:17:46
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-20 10:43:21
 * @Description:
 */
import { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/common/Heaer";
import { Web3Provider } from "@pages/Web3Provider";

const MainLayout = () => {
  return (
    <Web3Provider>
      <Header />
      <main>
        <Outlet />
      </main>
    </Web3Provider>
  );
};

export default memo(MainLayout);
