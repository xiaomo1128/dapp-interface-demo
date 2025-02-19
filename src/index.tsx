/*
 * @Author: xianglei
 * @Date: 2025-02-17 10:25:37
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-17 11:01:43
 * @FilePath: \src\index.tsx
 * @Description: 
 */
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
import App from '@pages/App';
const container = document.getElementById('app');
if (!container) {
  throw new Error('Failed to find the root element');
}
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
