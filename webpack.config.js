const merge = require("webpack-merge");
const argv = require("yargs-parser")(process.argv.slice(2));
const { resolve } = require("path");
const _mode = argv.mode || "development";
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const _modeflag = _mode === "production" ? true : false;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const Dotenv = require("dotenv-webpack");
// const ProgressBarPlugin = require('progress-bar-webpack-plugin');
// const WebpackBar = require('webpackbar');
const { ThemedProgressPlugin } = require("themed-progress-plugin");
const webpackBaseConfig = {
  entry: {
    main: resolve("src/index.tsx"),
  },
  output: {
    path: resolve(process.cwd(), "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules)/,
        use: {
          // `.swcrc` can be used to configure swc
          loader: "swc-loader",
        },
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/i,
        include: [
          resolve(__dirname, "src"),
          resolve(__dirname, "node_modules"),
        ],
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
    ],
  },
  optimization: {
    runtimeChunk: {
      name: "runtime",
    },
    splitChunks: {
      chunks: "all",
      // maxInitialRequests: 3,
      // name: true,
      // maxAsyncRequests: 3,
      cacheGroups: {
        // 剩下没有扫描到的，不管同步/异步 都放在这里
        commons: {
          chunks: "all",
          name: "chunk-common",
          minChunks: 2,
          maxInitialRequests: 5,
          priority: 1,
          enforce: true,
          reuseExistingChunk: true,
        },
        // 其余node_modules下面的包 第三方库
        vendors: {
          name: "chunk-vendors",
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          priority: 2,
          reuseExistingChunk: true,
          enforce: true,
        },
        uiComponent: {
          name: "chunk-components",
          test: /([\\/]node_modules[\\/]@mui[\\/].+\w)|(src[\\/]components[\\/]common)|([\\/]node_modules[\\/]@sicang[\\/]components)/,
          chunks: "all",
          priority: 4,
          reuseExistingChunk: true,
          enforce: true,
        },
        ethersSDK: {
          name: "chunk-web3-sdk",
          test: /[\\/]node_modules[\\/](ethers*\w|@ethersproject*\w|@web3-react*\w)/,
          chunks: "all",
          priority: 5,
          reuseExistingChunk: true,
          enforce: true,
        },
        reactLibs: {
          name: "chunk-react-libs",
          test: /[\\/]node_modules[\\/](react|react.+\w)/,
          chunks: "all",
          priority: 6,
          reuseExistingChunk: true,
          enforce: true,
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve("src/"),
      "@components": resolve("src/components"),
      "@hooks": resolve("src/hooks"),
      "@pages": resolve("src/pages"),
      "@layouts": resolve("src/layouts"),
      "@assets": resolve("src/assets"),
      "@states": resolve("src/states"),
      "@service": resolve("src/service"),
      "@utils": resolve("src/utils"),
      "@lib": resolve("src/lib"),
      "@constants": resolve("src/constants"),
      "@connections": resolve("src/connections"),
      "@abis": resolve("src/abis"),
      "@types": resolve("src/types"),
    },
    extensions: [".js", ".ts", ".tsx", ".jsx", ".css"],
    fallback: {
      // stream: require.resolve('stream-browserify'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: _modeflag
        ? "styles/[name].[contenthash:5].css"
        : "styles/[name].css",
      chunkFilename: _modeflag
        ? "styles/[name].[contenthash:5].css"
        : "styles/[name].css",
      ignoreOrder: false,
    }),
    new ThemedProgressPlugin(),
    // 生成资源清单文件 拆包分析
    new WebpackManifestPlugin({
      fileName: 'manifest.json',
    }),
  ],
};
module.exports = merge.default(webpackBaseConfig, _mergeConfig);
