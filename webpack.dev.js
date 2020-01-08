const mege = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = mege(common, {
  mode: development,
  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: true,
    
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  },
  plugins: [
    
  ]

})