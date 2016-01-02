import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

// redux related modules
import { compose, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { createDevTools, persistState } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

import { createHistory } from 'history';
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';

const reducer = combineReducers(Object.assign({}, {
  routing: routeReducer
}));

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='H' changePositionKey='Q'>
    <LogMonitor />
  </DockMonitor>
);

const finalCreateStore = compose(
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
)(createStore);

const store = finalCreateStore(reducer);

syncReduxAndRouter(browserHistory, store);

const NoMatch = () =>
  <h2>404</h2>;

const getComponent = (component) =>
  (location, cb) => {
    require.ensure([], (require) => {
      cb(null, require(`./components/${component}`));
    });
  };

const routes = (
  <Route path="/react-examples/react-router-complex" getComponent={getComponent('App')}>
    <Route path="/" getComponent={getComponent('Home')}></Route>
    <Route path="about" getComponent={getComponent('About')}></Route>
    <Route path="blog" getComponent={getComponent('Blog')}></Route>
    <Route path="blog/:postId" getComponent={getComponent('Post')}></Route>
    <Route path="*" component={NoMatch} ></Route>
  </Route>
);

render((
  <Provider store={store}>
    <div>
      <Router history={browserHistory} routes={routes} />
      <DevTools />
    </div>
  </Provider>
), document.getElementById('root'));
