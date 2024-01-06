/* eslint-disable import/no-extraneous-dependencies */
import ExtractTextPlugin from "extract-text-webpack-plugin";
import path from "path";

const webpackExampleConfig = {
  context: __dirname,
  devtool: "source-map",
  target: "web",
  entry: {
    example: "./example/js/index.jsx",
  },
  output: {
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "example"),
        ],
        loader: "babel-loader",
        test: /\.jsx?$/,
      },
      {
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "example"),
        ],
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "postcss-loader"],
        }),
        test: /\.css$/,
      },
      {
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "example"),
        ],
        loader: "eslint-loader",
        test: /\.jsx?$/,
        enforce: "pre",
      },
    ],
  },
  plugins: [new ExtractTextPlugin("[name].css")],
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx"],
  },
};

export default webpackExampleConfig;
