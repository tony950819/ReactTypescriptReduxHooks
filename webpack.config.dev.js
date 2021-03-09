const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development", //environtment 
  target: "web", 
  devtool: "cheap-module-source-map", //allows see original code in the browser 
  entry: "./src/index.tsx", //entry point default page
  output: { //build in memory en dev env, Webpack requires this value because our html can reference the bundle 
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: { //minimal configuration for dev environtment 
    stats: "minimal",
    overlay: true, // overlay any error in the browser
    historyApiFallback: true, //all request will be sent to index.hmtl
    disableHostCheck: true, //avoid error in latest version of chrome
    headers: { "Access-Control-Allow-Origin": "*" }, //any origin
    https: false
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.API_URL": JSON.stringify("http://localhost:3001")
    }),

    new HtmlWebpackPlugin({
      template: "src/index.html",
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
