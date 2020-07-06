const path = require("path");
module.exports = {
  entry: {
    app: "./client/index.tsx",
    react: ["react"],
    reactDom: ["react-dom"],
    echarts: ["echarts", "echarts-for-react", "echarts-gl"],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "@": path.join(__dirname, "client"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              configFile: path.resolve(__dirname, "../../client/tsconfig.json"),
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  // 分割同步引入的代码
  // 异步引入的代码，需要在tsconfig和babelrc中配置，解析import()语法即可
  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendors: false,
        default: false,
      }
    },
  },
};
