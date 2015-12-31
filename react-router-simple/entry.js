import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

const Home = () =>
  <h2>Home</h2>;

const About = () =>
  <h2>About</h2>;

const Inbox = () =>
  <h2>Inbox</h2>;

const App = ({children}) =>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/inbox">Inbox</Link></li>
    </ul>
    {children}
  </div>;

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.getElementById('root'));
