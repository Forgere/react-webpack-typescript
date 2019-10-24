import * as React from 'react';
import { render } from 'react-dom';

import App from './app/layouts/App';

import './app/style.less';

const root = document.createElement('div');
document.body.appendChild(root);

render(<App />, root);