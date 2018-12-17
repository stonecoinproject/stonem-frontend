import * as React from 'react';
import { theme } from '../../config';
import Header from '../Header';
import Sidebar from '../Sidebar';
import {
  Base,
  GlobalStyle,
} from '../UI';

type appComponentProps = {
  children: React.ReactNode;
};

const appComponent:React.SFC = ({
  children,
  ...props }: appComponentProps) => {
  return (
    <Base>
      <GlobalStyle />
        <Sidebar {...props} />
        <Base style={{
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
