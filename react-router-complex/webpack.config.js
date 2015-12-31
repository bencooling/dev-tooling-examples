var Path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    './entry.js'
  ],
  output: {
    path: 'build',
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
};
