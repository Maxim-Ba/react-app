const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const mege = require('webpack-merge');
const common = require('./webpack.config.js');
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = mege(common, {
  mode: 'production',
  output: {
    //   // publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[chunkhash].js',
    },
  node: {
    fs: 'empty'
  },
  module: { rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },  
  ],},
  
  plugins: [
    new WebpackMd5Hash(),
    new MiniCssExtractPlugin({
      filename: './style/index.[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true
    }),
  ]

})