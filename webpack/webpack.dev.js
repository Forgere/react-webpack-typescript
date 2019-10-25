const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'inline-source-map',
  entry: {
    app: [
      'react-hot-loader/patch',
      path.resolve(__dirname, '../index.js'),
    ],
  },
  // 模块热更新
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    publicPath: '/',
  },
  devServer: {
    // 模块热更新
    hot: true,
    historyApiFallback: true,
  },
});
