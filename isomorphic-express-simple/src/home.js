export default (React) => props => Object.assign(React.Component.prototype, {

  state: {
    name: 'Ben'
  },

  handleClick (){
    this.setState({
      name: (this.state.name === 'Ben') ? 'Courtney' : 'Ben'
    });
  },

  render (){
    return (<h2 onClick={this.handleClick.bind(this)}>Hello {this.state.name}</h2>);
  }

});
