const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    editProduct: "./src/editProduct.js"
  },
  output: {
    path: path.resolve(__dirname, "public/static/js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  }
};
