import * as React from 'react';
import {Menu, Input} from 'antd';

const {SubMenu} = Menu;

require('./NavBar.less');

export class MenuNode{
  url: string;
  name: string;
  icon?: string | React.ReactNode;
  children?: MenuNode[];
}

interface IProps{
  click: (params: any) => void;
  array?: MenuNode[];
}

interface IState{
  current?: string;
}

export class NavBar extends React.Component<IProps, IState>{
  render() {
    return (
      <Menu onClick={this.props.click}>
        <Menu.Item key="1">
          home1
        </Menu.Item>
        <Menu.Item key="2">
          about2
        </Menu.Item>
        <Menu.Item key="3">
          inbox3
          <Input placeholder="Basic usage" />
        </Menu.Item>
      </Menu>
    );
  }
}