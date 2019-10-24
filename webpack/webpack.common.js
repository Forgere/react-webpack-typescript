const path = require('path')
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: {
    //     app: path.resolve(__dirname, '../src/index.js')
    // },
    entry: {
        app: path.resolve(__dirname, '../src/index.js'),
        // 重用库，分离
        // vendor: [
        //     'react',
        // ],
        // loadsh: ['loadsh']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../index.html"),
        })
    ],
    optimization: {
        splitChunks: {
          cacheGroups: {
            vendors: {
              reuseExistingChunk: true
            }
          }
        }
      },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif|JPG)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
}