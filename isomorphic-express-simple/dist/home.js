'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (React) {
  return function (props) {
    return Object.assign(React.Component.prototype, {

      state: {
        name: 'Ben'
      },

      handleClick: function handleClick() {
        this.setState({
          name: this.state.name === 'Ben' ? 'Courtney' : 'Ben'
        });
      },
      render: function render() {
        return React.createElement(
          'h2',
          { onClick: this.handleClick.bind(this) },
          'Hello ',
          this.state.name
        );
      }
    });
  };
};
//# sourceMappingURL=home.js.map