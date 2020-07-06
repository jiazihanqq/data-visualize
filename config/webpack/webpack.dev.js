const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = merge(baseWebpackConfig, {
  mode: "development",
  output: {
    publicPath: "/",
    path: resolveApp("build"),
    filename: "static/js/[name].js",
    chunkFilename: "static/js/chunks/[name].chunk.js",
  },
  devServer: {
    port: 8080,
    contentBase: resolveApp("build"),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
    open: false,
    proxy: [
      {
        context: ["/v1"],
        target: "http://127.0.0.1:8081",
        changeOrigin: true,
      },
    ],
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./client/index.html",
      inject: "body",
      minify: {
        html5: true,
      },
      hash: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
