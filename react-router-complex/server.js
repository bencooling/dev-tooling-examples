var Path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.nodejs');

var server = new WebpackDevServer(webpack(config), {
  contentBase: Path.resolve(__dirname),
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
});
server.listen(3000, 'localhost', function () {

  console.log('server listening on 3000');
});
