import * as React from 'react';
import { Button, Input } from 'antd';

import {
  BrowserRouter, Route, Link, Switch,
} from 'react-router-dom';

import { NavBarR } from '../components/NavBar/NavBar';

const nav: React.ReactNode = (
  <NavBarR mode="horizontal" array={[
    {
      url: '/home',
      name: 'home',
    },
    {
      url: '/about',
      name: 'about',
    },
    {
      url: '/inbox',
      name: 'inbox',
    },
    {
      url: '/message',
      name: 'message',
      children: [
        {
          url: '/message/a',
          name: 'messagea',
        },
        {
          url: '/message/b',
          name: 'messageb',
        },
      ]
    },
  ]}/>
)

const App = () => (
  <div>
    Welcome to your App
    <Button type="primary">12</Button>
    <Input placeholder="Basic usage" />
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
    {nav}
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/about" component={About} />
      <Route path="/inbox" component={Inbox} />
      <Route path="/message" component={Message} />
    </Switch>
  </BrowserRouter>
);

export default app;
