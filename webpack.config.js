const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  resolveLoader: {
    alias: {
      "math-to-svg-loader": path.join(
        __dirname,
        "utils",
        "math-to-svg-loader.js"
      )
    }
  },
  resolve: {
    mainFields: ["svelte", "browser", "module", "main"]
  },
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        use: "svelte-loader"
      },
      {
        test: /\.(mathml|asciimath|tex)$/,
        exclude: /node_modules/,
        use: [
          { loader: "raw-loader" },
          { loader: "math-to-svg-loader", options: { format: "AsciiMath" } }
        ]
      },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  entry: "./bootstrap.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js"
  },
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(["index.html"]),
    new HtmlWebpackPlugin({ title: "Calculator 2", favicon: "./favicon.ico" }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  ]
};
