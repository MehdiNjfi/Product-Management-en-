const path = require("path");

module.exports = {
  resolve: {
    extensions: ['.js'],
  },
  entry: {
    index: "./src/index.js",
    editProduct: "./src/editProduct.js"
  },
  output: {
    path: path.resolve(__dirname, "build/static/js"),
    filename: "[name].js",
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './',
    publicPath: './public/',
    open: true, 
    hot: true,
    openPage: './public/index.html',
    port: 3000,
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
