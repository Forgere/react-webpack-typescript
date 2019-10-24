import * as React from 'react';

require('./NavBar.less');

export const NavBar: React.FunctionComponent<{ compiler: string, framework: string }> = (props) => {
    return (
      <div className={'aa'}>
        <div>{props.compiler}</div>
        <div>{props.framework}</div>
      </div>
    );
  }