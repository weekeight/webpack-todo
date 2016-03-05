var config = {
  entry: {
    todo: "./src/js/app.jsx"
  },

  output: {
    filename: "[name].bundle.js",
    path: __dirname + '/build',
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
      }
    ]
  }
};

module.exports = config;
