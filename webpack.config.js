const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const PreloadWebpackPlugin = require("preload-webpack-plugin");

//https://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6

const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist'),
    library: 'bson_webpack',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: { presets: ["env"] } //TODO how is this used?
        }
      }
    ]
  },
  plugins: [
    new MinifyPlugin(),
    // new PreloadWebpackPlugin()
  ]
};
