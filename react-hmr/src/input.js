var React = require('react');
var ReactDOM = require('react-dom');

var Input = React.createClass({
  render () {
    return (
      <input style={{color:'red'}} placeholder="Class" />
    );
  }
});

module.exports = Input;
