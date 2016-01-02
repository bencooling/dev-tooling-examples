var Path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './entry.js'
    // 'webpack-dev-server/client?http://localhost:3000',
    // 'webpack/hot/only-dev-server'
  ],
  output: {
    path: 'build',
    publicPath: '/react-examples/react-router-complex/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-3']
      }
    ]
  }
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ]
};
