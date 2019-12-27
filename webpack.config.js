const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');


module.exports = {
  entry: {
    index: './src/index.js',
    about: './src/about.js',
    
  },
  mode: 'development',
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '../'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      filename: 'html/index.html',
      chunks: ['index']}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'about.html'),
      filename: 'html/about.html',
      chunks: ['about']}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css'      
    }),
    
    new CleanWebpackPlugin()
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader,'css-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      }
    ]
  }
};