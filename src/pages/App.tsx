/*
 * @Author: xianglei
 * @Date: 2025-02-20 05:17:46
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-20 06:07:33
 * @Description:
 */
import { useRoutes } from "react-router-dom";
import routes from "@/routes/index";

const App = () => {
  const routing = useRoutes(routes);
  return <>{routing}</>;
};
export default App;
