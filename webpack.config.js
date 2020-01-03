const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const BrowserSync = require('browser-sync-webpack-plugin');


module.exports = {
  entry: {
    add: './src/js/add.js',
    auth: './src/js/auth.js',
    summary: './src/js/summary.js',
    opp: './src/js/opp.js'
    
  },
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '../'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src','html', 'add.html'),
      filename: 'html/add.html',
      chunks: ['add']}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src','html', 'auth.html'),
      filename: 'html/auth.html',
      chunks: ['auth']}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src','html', 'summary.html'),
      filename: 'html/summary.html',
      chunks: ['summary']}),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src','html', 'opp.html'),
      filename: 'html/opp.html',
      chunks: ['opp']}),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: '[id].css'      
    }),
      new BrowserSync({
        host: 'localhost',
        port: '63342',

        files: ['./dist/*.html'],
        proxy: 'http://localhost:63342/Praetura_Pipeline_App_V3/dist/html/'
      })
    

  ],
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }},
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