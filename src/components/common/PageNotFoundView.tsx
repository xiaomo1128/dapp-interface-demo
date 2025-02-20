/*
 * @Author: xianglei
 * @Date: 2025-02-20 05:17:46
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-20 05:54:27
 * @Description: 
 */
import { Home, ArrowLeft } from "lucide-react";

const PageNotFoundView = () => {
  const goHome = () => {
    window.location.href = '/';
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-6 max-w-md">
        {/* 404 大数字 */}
        <h1 className="text-8xl font-bold text-blue-600 dark:text-blue-500">404</h1>
        
        {/* 错误信息 */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">页面未找到</h2>
          <p className="text-gray-600 dark:text-gray-400">
            抱歉，您访问的页面不存在或已被移除。
          </p>
        </div>

        {/* 操作按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button 
            onClick={goHome}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:hover:bg-blue-600 dark:focus:ring-offset-gray-900"
          >
            <Home size={16} />
            返回首页
          </button>
          
          <button 
            onClick={goBack}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900"
          >
            <ArrowLeft size={16} />
            返回上页
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageNotFoundView;