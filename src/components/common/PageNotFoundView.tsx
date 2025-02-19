/*
 * @Author: xianglei
 * @Date: 2025-02-17 10:27:08
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-17 11:04:58
 * @FilePath: \src\components\common\PageNotFoundView.tsx
 * @Description: 
 */
import { FileQuestion } from "lucide-react"
import { useNavigate } from "react-router-dom"

const PageNotFoundView = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4">
        <div className="space-y-2">
          <FileQuestion 
            className="h-24 w-24 text-gray-400 dark:text-gray-500 mx-auto" 
            aria-hidden="true"
          />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">
            页面未找到
          </h1>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            抱歉，您访问的页面不存在或已被移除。
          </p>
        </div>
        <div className="space-x-4">
          <button 
            onClick={() => navigate("/")} 
            className="inline-flex h-10 items-center justify-center rounded-md px-8
                     bg-blue-600 text-white hover:bg-blue-700 
                     dark:bg-blue-500 dark:hover:bg-blue-600
                     transition-colors duration-200"
          >
            返回首页
          </button>
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex h-10 items-center justify-center rounded-md px-8
                     border border-gray-200 bg-white text-gray-900
                     hover:bg-gray-100 hover:text-gray-900
                     dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50
                     dark:hover:bg-gray-800 dark:hover:text-gray-50
                     transition-colors duration-200"
          >
            返回上页
          </button>
        </div>
      </div>
    </div>
  )
}

export default PageNotFoundView