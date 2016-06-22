var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/BeClient.js',
    libraryTarget: 'var',
    library: 'BeClient',
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/,
      },
    ],
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
  ],
};
