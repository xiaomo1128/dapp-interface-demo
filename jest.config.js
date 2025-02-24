/*
 * @Author: xianglei
 * @Date: 2025-02-22 18:59:50
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-22 18:59:58
 * @Description:
 */
module.exports = {
  testMatch: ["**/?(*.)(spec|test).ts?(x)"],
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.ts"],
  rootDir: "",
  transform: {
    ".(ts|tsx)": "@swc/jest",
  },
  moduleNameMapper: {
    "^@utils(.*)$": "<rootDir>/src/utils$1",
  },
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  watchAll: false,
  collectCoverage: true,
  coverageDirectory: "./docs/jest-coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "/tests/"],
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx", "node"],
};
