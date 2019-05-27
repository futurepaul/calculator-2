const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
    new HtmlWebpackPlugin({ title: "Calculator 2", favicon: "./favicon.ico" })
  ]
};
