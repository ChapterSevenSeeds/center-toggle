module.exports = {
    entry: './CenterToggle.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.js']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
            cacheDirectory: true,
            presets: ['react', 'es2015']
          }
        }
      ]
    }
  }