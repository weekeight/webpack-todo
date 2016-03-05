var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/js/app.jsx',
  output: { path: __dirname + '/build', filename: 'todo.bundle.js' },
  module: {
    loaders: [
      { test: /\.less$/, loader: "style!css!autoprefixer-loader!less" },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]']
      },
      {
        test: /.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
