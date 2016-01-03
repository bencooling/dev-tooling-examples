import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import HomeFactory from './home';

var Home = HomeFactory(React);
var app = express();

app.use(express.static('src/build'));

var html = (root) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="initial-scale=1" />
    <title>TODO: pass down as props</title>
  </head>
  <body>
    <div id="root">${root}</div>
    <script src="/bundle.js"></script>
  </body>
</html>`;


app.get('/', function (req, res) {
  res.send(html(ReactDOMServer.renderToString(<Home />)));
});

app.listen(3000);
