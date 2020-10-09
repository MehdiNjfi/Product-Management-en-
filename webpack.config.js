const path = require("path");

module.exports = {
  mode: 'development',
  resolve: {
    extensions: ['.js'],
  },
  entry: {
    index: './src/index.js',
    editProduct: './src/editProduct.js'
  },
  output: {
    path: path.resolve(__dirname, "public/static/js"),
    filename: "[name].js",
  },
  devServer: {
    contentBase: path.resolve(__dirname),
    publicPath: '/public/static/js/',
    open: true,
    openPage: 'public/',
    port: 3000
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
