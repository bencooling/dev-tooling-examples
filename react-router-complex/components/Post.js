import React from 'react';

// export default () =>
module.exports = ({params}) => // require.ensure needs module.exports apparently
  <h2>Post: {params.postId}</h2>;
