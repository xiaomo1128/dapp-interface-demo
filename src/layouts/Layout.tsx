import { memo } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/common/Heaer";
import { Web3Provider } from "@pages/Web3Provider";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main> 
        <Outlet />
      </main>
    </>
  );
};

export default memo(MainLayout);