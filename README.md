# react examples

#### common features to all examples
- npm as build tool
- webpack for client module bundling
- babel for compiling es6 source code


## examples


## react-static-site-generator
- npm build tool to publish markdown to html files
- isomorphic react code

## isomorphic express simple  
- isomorphic, react component is served from server, client doesn't render just
attaches events and relevant interactions.
- classless react component using [concatenative inheritance](https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a#.xe2z15u1d)
- express server with static middleware (for serving bundle.js file)


### react router complex  
**features**  
- 2 level deep navigation with URL Parameters
- code splitting (load code on demand) with [gradual matching](https://github.com/rackt/react-router/blob/b06d1db7864ba16e36dc7bdae40e18ed86d23907/docs/guides/advanced/DynamicRouting.md)
- basic universal (reload browser works)
- redux with time travel
- build with latest releases: babel 6, react-router 2


### react router simple  
Very simple example with top level navigation routes


### react hmr  
- React Hot Module Replacement (react-transform-hmr) with Babel 6
- webpack-dev-server usage as opposed to [Express server + middleware plugins](https://github.com/gaearon/react-transform-boilerplate)
- Demonstrates [lack of (current) support for functional components](https://github.com/gaearon/react-transform-hmr/issues/6)
