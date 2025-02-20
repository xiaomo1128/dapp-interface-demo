/*
 * @Author: xianglei
 * @Date: 2025-02-20 05:17:46
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-20 05:33:38
 * @FilePath: /src/index.tsx
 * @Description:
 */
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './style.css';
import App from "@pages/App";

const container = document.getElementById("app");

const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
