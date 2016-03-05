var config = {
  debug: true,
  devtool: 'source-map',

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
        loaders: ['file?hash=sha512&digest=hex&name=[path][name].[ext]']
      }
    ]
  }
};

module.exports = config;
