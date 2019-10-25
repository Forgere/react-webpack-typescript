import * as React from 'react';

import { Button } from 'antd-mobile';
import 'antd-mobile/lib/button/style'; 

import { withRouter } from 'react-router-dom';

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
  location: Location;
}

interface IState{
  current?: string;
}

export class NavBar extends React.Component<IProps, IState>{

  state={
    current: this.props.location.pathname
  }

  render() {
    const {array, mode} = this.props;
    return (
      <Button type="ghost">Start</Button>
    );
  }
}

export const NavBarR = withRouter<any, React.ComponentType<any>>(NavBar);