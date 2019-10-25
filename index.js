import * as React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
import App from './app/layouts/App.tsx';
import 'antd-mobile/dist/antd-mobile.css';

require('./app/style.less');

const root = document.createElement('div');
document.body.appendChild(root);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root,
  );
};

render(App, root);

if (module.hot) {
  module.hot.accept('./app/layouts/App', () => {
    render(App);
  });
}
