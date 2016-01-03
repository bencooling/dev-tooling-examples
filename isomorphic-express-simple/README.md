# isomorphic express simple  

A simple (the simplest?) universal/isomorphic react implementation.


## features

- isomorphic, react component is served from server, client doesn't render just
attaches events and relevant interactions.
- classless react component using [concatenative inheritance](https://medium.com/javascript-scene/common-misconceptions-about-inheritance-in-javascript-d5d9bab29b0a#.xe2z15u1d)
- es6 source code
- webpack for client module bundling (bundle.js)
- babel for server compiling es6 source code (/dist)
- express server with static middleware (for serving bundle.js file)
- npm as build tool (see commands below)


## commands

**Bundle files for client**  
`webpack`

**Run development server**  
`npm run serve`

**Build for production**  
transpile source code to es5; no use of node-babel.  
`npm run build`

**Run server for production**  
`npm run start`
