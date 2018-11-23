import * as React from 'react';
import { theme } from '../../config';
import Header from '../Header';
import Sidebar from '../Sidebar';
import {
  Base,
  GlobalStyle,
} from '../UI';

const appComponent = (props:any) => {
  const { children } = props;

  return (
    <Base>
      <GlobalStyle />
        <Sidebar/>
        <Base css={{
          width: `calc(100%-${theme.Sidebar.width}px)`,
          marginLeft: theme.Sidebar.width,
        }}>
          <Header/>
          <Base width={1}>{children}</Base>
        </Base>
    </Base>
  );
};

export default appComponent;
