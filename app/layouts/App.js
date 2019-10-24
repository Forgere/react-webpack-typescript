import * as React from 'react';
import { hot } from 'react-hot-loader/root';

import NavBar from '../components/NavBar';

const app = () => (
  <div>
    <NavBar compiler="1" framework="2" />
    <h1>Hello, world.</h1>
  </div>
);

export default hot(app);
