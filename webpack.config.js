var Clean = require('clean-webpack-plugin');
var webpack = require('webpack');

var devEnv = JSON.parse(process.env.DEV || 'false');
var onlineEnv = JSON.parse(process.env.ONLINE || 'false');

var config = {
  debug: onlineEnv ? false : true,
  devtool: onlineEnv ? '' : 'source-map',

  entry: {
    todo: "./src/js/app.jsx"
  },

  output: {
    filename: "[name].bundle.js",
    path: __dirname + '/build',
    publicPath: "/build",
  },

  module: {
    loaders: [
    {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.less$/,
        loader: "style!css!autoprefixer-loader!less"
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: ['file?hash=sha512&digest=hex&name=[hash].[ext]']
      }
    ]
  },
  plugins: [
    !devEnv ? new Clean(['build']) : function(){},
    !devEnv ? new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      minimize: true
    }) : function(){},
  ]
};

module.exports = config;
