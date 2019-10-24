const merge = require('webpack-merge');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    mode: 'production',
    plugins: [
        // 生产环境变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    optimization: optimization()
});

function optimization() {
    if (process.env.NODE_ENV !== 'production') {
      return;
    }
  
    return {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: 6,
            compress: true,
            output: {
              comments: false,
              beautify: false
            }
          }
        })
      ]
    };
  }