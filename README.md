# react examples

The source code for each example is assumed to be written in es6 (with babel transpiling to es5) unless the example name is prefixed with `es5-`.

Examples work with the following libraries:  
- webpack
- webpack-dev-server
- static-site-generator-webpack-plugin
- react
- react-router
- redux
- falcor
- eslint
- babel


## examples

### react router complex  
**features**  
- 2 level deep navigation with URL Parameters
- code splitting (load code on demand)
- basic universal (reload browser works)
- redux with time travel
- build with latest releases: babel 6, react-router 2

### react router simple  
Very simple example with top level navigation routes

### react hmr  
- React Hot Module Replacement (react-transform-hmr) with Babel 6
- webpack-dev-server usage as opposed to [Express server + middleware plugins](https://github.com/gaearon/react-transform-boilerplate)
- Demonstrates [lack of (current) support for functional components](https://github.com/gaearon/react-transform-hmr/issues/6)
