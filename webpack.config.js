const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const path = require('path');
const autoprefixer = require('autoprefixer')

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true
  }
}
const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false
  }
}
const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: ()=> [
      autoprefixer()
    ]
  }
}
module.exports = {
  entry: {index:'./src/index.js'},
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, {
        test: /\.(scss|css)$/,
        exclude: /\.module\.scss$/,
        use: [
          'style-loader',
          CSSLoader,
          'sass-loader',
          postCSSLoader
        ]
      },{
        test: /\.module\.scss$/,
        use: [
          'style-loader',
          CSSModuleLoader,
          'sass-loader',
          postCSSLoader
        ]
      },{
        test: /\.(png|gif)$/i,
        use: [
          'file-loader?name=./images/[name].[ext]',
          {
            loader: 'image-webpack-loader'
          }
        ],
      },
      {
        test: /\.(jpg|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader?name=./images/[name].[ext]'
          },

        ],
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=./vendor/[name].[ext]'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    
    new WebpackMd5Hash(),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
  ]
}