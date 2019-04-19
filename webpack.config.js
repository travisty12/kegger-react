const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    resolve(__dirname, 'src', 'index.jsx')
  ],

  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  }
};
