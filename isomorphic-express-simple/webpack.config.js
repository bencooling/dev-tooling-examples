var Path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    Path.resolve('./src/client.js')
    // 'webpack-dev-server/client?http://localhost:3000',
    // 'webpack/hot/only-dev-server'
  ],
  output: {
    path: Path.resolve('src/build'),
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
  },
  plugins: [
    // new StaticSiteGeneratorPlugin('main', paths, config)
    // new webpack.HotModuleReplacementPlugin()
  ]
};
