const mege = require('webpack-merge');
const common = require('./webpack.config.js');

module.exports = mege(common, {
  mode: development,
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
  plugins: []

})