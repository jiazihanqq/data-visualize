const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("../webpack.common");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = merge(baseWebpackConfig, {
  mode: "production",
  bail: true,
  output: {
    publicPath: "/",
    path: resolveApp("dist/client"),
    filename: "src/js/[name].[hash:16].js",
    chunkFilename: "src/js/[name].chunk.[hash:16].js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./client/index.html",
      inject: "body",
      minify: {
        html5: true,
      },
      hash: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"prod"',
    }),
  ],
});
