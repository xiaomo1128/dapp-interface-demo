/*
 * @Author: xianglei
 * @Date: 2025-02-20 05:17:46
 * @LastEditors: xianglei
 * @LastEditTime: 2025-02-22 20:40:02
 * @Description: 
 */
//开启JS多线程的压缩
const TerserPlugin = require('terser-webpack-plugin');
const os = require('os');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { join, resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: {
    path: join(__dirname, '../dist'),
    publicPath: '/',
    filename: 'scripts/[name].[contenthash:5].bundule.js',
    assetModuleFilename: 'images/[name].[contenthash:5][ext]',
  },
  performance: {
    maxAssetSize: 250000, // 最大资源大小250KB
    maxEntrypointSize: 250000, // 最大入口资源大小250KB
    hints: 'warning', // 超出限制时只给出警告
  },
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        parallel: true,
      }),
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Yideng',
      filename: 'index.html',
      template: resolve(__dirname, '../src/index-prod.html'),
      favicon: './public/favicon.ico',
    }),
  ],
};
