/*
 * @Author: xianglei
 * @Date: 2025-02-20 05:17:46
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-20 10:24:20
 * @Description:
 */
import { Wallet, Menu, X } from "lucide-react";
import { useState } from "react";
import { ConnectKitButton } from "connectkit";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  const connectWallet = () => {
    // 这里添加连接钱包的逻辑
    console.log("Connecting wallet...");
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          {/* 左侧 Logo */}
          <div
            className="flex-shrink-0 cursor-pointer"
            onClick={() => navigateTo("/")}
          >
            <span className="text-xl font-bold text-blue-600 dark:text-blue-500">
              LOGO
            </span>
          </div>

          {/* 移动端菜单按钮 */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* 桌面端导航 */}
          <div className="hidden md:flex md:space-x-8">
            <a
              onClick={() => navigateTo("/")}
              className="cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium"
            >
              首页
            </a>
            <a
              onClick={() => navigateTo("/dapp")}
              className="cursor-pointer text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium"
            >
              DApp
            </a>
          </div>

          {/* 右侧钱包按钮 */}
          <div className="hidden md:flex items-center">
            {/* <button
              onClick={connectWallet}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:hover:bg-blue-600"
            >
              <Wallet size={16} />
              连接钱包
            </button> */}
            <ConnectKitButton />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
