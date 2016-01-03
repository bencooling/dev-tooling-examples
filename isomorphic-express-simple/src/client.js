import React from 'react';
import { render } from 'react-dom';

import HomeFactory from './home';

var Home = HomeFactory(React);

render(<Home />, document.getElementById('root'));
