import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

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
    <Route path="/" component={App} >
      <IndexRoute getComponent={(location, cb) => {
        require.ensure([], function (require){
          cb(null, require('./components/Home'));
        });
      }} />
      <Route path="about" getComponent={(location, cb) => {
        require.ensure([], function (require){
          cb(null, require('./components/About'));
        });
      }} />
      <Route path="inbox" getComponent={(location, cb) => {
        require.ensure([], function (require){
          cb(null, require('./components/Inbox'));
        });
      }} />
    </Route>
  </Router>
), document.getElementById('root'));
