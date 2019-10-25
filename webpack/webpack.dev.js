const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  // 模块热更新
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    publicPath: 'http://localhost:8080',
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    // 模块热更新
    hot: true,
    publicPath: 'http://localhost:8080',
    historyApiFallback: true,
  },
});
