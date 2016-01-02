import React from 'react';
import { Link } from 'react-router';

// export default () =>
module.exports = ({children}) => // require.ensure needs module.exports apparently
  <div>
    <ul>
      <li><Link activeClassName="active" to="/">Home</Link></li>
      <li><Link activeClassName="active" to="/about">About</Link></li>
      <li><Link activeClassName="active" to="/blog">Blog</Link></li>
      <li><Link activeClassName="active" to="/blog/123">Post 123</Link></li>
    </ul>
    {children}
  </div>;
