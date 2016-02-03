var Path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: ['./entry.js']
  },
  output: {
    path: Path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    filename: 'bundle.js'
  }
};
