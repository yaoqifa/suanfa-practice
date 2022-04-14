const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const WebpackPlugin1 = require('./plugins/1-webpack-plugin')
const FileListPlugin = require('./plugins/fileListPlugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'custom-plugin'
    }),
    new CleanWebpackPlugin(),
    new WebpackPlugin1({ msg: 'first plugin' }),
    new FileListPlugin({filename: 'FileListPlugin.md'})
  ]
}