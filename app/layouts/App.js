import * as React from 'react';
import Button from 'antd/es/button';

import { hot } from 'react-hot-loader/root';
import {
  BrowserRouter, Route, Link, Switch,
} from 'react-router-dom';

const App = () => (
  <div>
    <h2>App</h2>
    Welcome to your App1222
    <Button type="danger">1</Button>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    Welcome to your About
  </div>
);

const Inbox = () => (
  <div>
    <h2>Inbox</h2>
    Welcome to your Inbox
  </div>
);

class Message extends React.Component {
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h2>Message</h2>
        Welcome to your Message2
        <Link to="/message/a">a </Link>
        <Link to="/message/b">b </Link>
        <Switch>
          <Route path="/message" component={Inbox} exact />
          <Route path="/message/a" component={About} />
          <Route path="/message/b" component={Inbox} />
        </Switch>
      </div>
    );
  }
}

const app = () => (
  <BrowserRouter>
    <Button>2</Button>
    <div>
      <Link to="/about">about </Link>
      <Link to="/inbox">inbox </Link>
      <Link to="/message">message </Link>
    </div>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/about" component={About} />
      <Route path="/inbox" component={Inbox} />
      <Route path="/message" component={Message} />
    </Switch>
  </BrowserRouter>
);

export default hot(app);
