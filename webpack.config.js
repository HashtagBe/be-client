var webpack = require('webpack');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: './lib/index.js',
  output: {
    filename: './dist/BeClient.js',
    libraryTarget: 'umd',
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
  externals: {
    axios: 'axios',
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
