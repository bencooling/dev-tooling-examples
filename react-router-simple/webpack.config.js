var Path = require('path');
var webpack = require('webpack');

// webpack.config.js
module.exports = {
  // devtool: 'eval',
  entry: [
    // 'webpack-dev-server/client?http://localhost:8000',
    // 'webpack/hot/only-dev-server',
    './entry.js'
  ],
  output: {
    path: 'build',
    publicPath: 'build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-3'] // react-hot !w/ react 0.14
        // loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015,presets[]=stage-3']
      }
    ]
  }
  // plugins: [
  //   new webpack.HotModuleReplacementPlugin()
  // ]
};
