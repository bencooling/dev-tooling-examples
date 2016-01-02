import React from 'react';
import { Link } from 'react-router';

// export default () =>
module.exports = ({children}) => // require.ensure needs module.exports apparently
  <div>
    <ul>
      <li><Link activeClassName="active" to="/react-examples/react-router-complex/">Home</Link></li>
      <li><Link activeClassName="active" to="/react-examples/react-router-complex/about">About</Link></li>
      <li><Link activeClassName="active" to="/react-examples/react-router-complex/blog">Blog</Link></li>
      <li><Link activeClassName="active" to="/react-examples/react-router-complex/blog/123">Post 123</Link></li>
    </ul>
    {children}
  </div>;
