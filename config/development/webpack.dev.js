const merge = require("webpack-merge");
const baseWebpackConfig = require("../webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = merge(baseWebpackConfig, {
  mode: "development",

  devServer: {
    port: "8080",
    contentBase: path.join(__dirname, "./dist"),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
    open: true,
    proxy: {
      "/v1": { target: "http://127.0.0.1:8081", changeOrigin: true },
    },
  },
  devtool: 'inline-cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html",
      inject: "body",
      minify: {
        html5: true,
      },
      hash: false,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": '"dev"',
    }),
  ],
});
