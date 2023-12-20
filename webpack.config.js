const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { NODE_ENV } = process.env;
const development = "development";
const mode = NODE_ENV || development;
const devMode = mode === development;

const devtool = mode === development ? "source-map" : undefined;

module.exports = {
  mode,
  devtool,
  context: path.resolve(__dirname, "src"),
  entry: "./index.tsx",
  output: {
    filename: "static/[name].[contenthash].js",
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "assets/[hash][ext][query]",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: true,
      },
    },
  },
  module: {
    rules: [
      { test: /\.(html)$/, use: ["html-loader"] },
      {
        test: /\.(css)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset",
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/i,
        type: "asset",
        use: ["url-loader"],
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] },
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "../public/index.html",
      filename: "index.html",
      favicon: "../public/icon.svg",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ].concat(devMode ? new ReactRefreshWebpackPlugin() : []),
  optimization: !devMode
    ? {
        moduleIds: "deterministic",
        splitChunks: {
          chunks: "all",
        },
        runtimeChunk: {
          name: "manifest",
        },
      }
    : {},
  externals: !devMode
    ? {
        react: "React",
        "react-dom": "ReactDOM",
      }
    : {},
};
