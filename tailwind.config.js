/*
 * @Author: xianglei
 * @Date: 2025-02-20 05:17:46
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-20 08:12:44
 * @Description: 
 */
module.exports = {
  content: ["./src/**/*.tsx", "./src/**/*.html"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ccc",
      },
    },
  },
};
