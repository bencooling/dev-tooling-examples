var Path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    Path.resolve('./entry.js')
    // 'webpack-dev-server/client?http://localhost:3000',
    // 'webpack/hot/only-dev-server'
  ],
  output: {
    path: Path.join(__dirname, 'build'),
    publicPath: '/build/',
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
