var React = require('react');
var ReactDOM = require('react-dom');

var Input2 = function (){
  return (<input style={{color:'blue'}} placeholder="Pure function" />);
};

module.exports = Input2;

// functional components not supported yet: https://github.com/gaearon/babel-plugin-react-transform/issues/57
