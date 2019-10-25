import * as React from 'react';
import {Menu} from 'antd';
import { Link } from 'react-router-dom';

const {SubMenu} = Menu;

require('./NavBar.less');

export class MenuNode{
  url: string;
  name: string;
  icon?: string | React.ReactNode;
  children?: MenuNode[];
}

interface IProps{
  click?: (params: any) => void;
  array?: MenuNode[];
  mode?: "vertical-right"|"horizontal"|"inline"|"vertical-left"|"vertical";
}

interface IState{
  current?: string;
}

export class NavBar extends React.Component<IProps, IState>{

  state={
    current: ''
  }

  componentDidMount(){
    console.log(window.location.pathname)
    this.setState({
      current: window.location.pathname
    })
  }

  loop(array: MenuNode[]): React.ReactNode[]{
    return array.map(item => {
      return (
          item.children && item.children.length > 0
          ?
          <SubMenu title={item.name} key={item.url}>
            {this.loop(item.children)}
          </SubMenu> 
          :
          <Menu.Item key={item.url}>
            <Link to={item.url}>{item.name}</Link>
          </Menu.Item>
      )
    })
  }

  render() {
    const {array, mode} = this.props;
    return (
      <Menu onClick={(param) => {
        this.setState({
          current: param.key
        })
      }} mode={mode} selectedKeys={[this.state.current]}>
        {array && this.loop(array)}
      </Menu>
    );
  }
}