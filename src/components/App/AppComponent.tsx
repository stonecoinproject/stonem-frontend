import React from 'react';
import {
  Box,
  Flex,
} from 'rebass';
import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../../config';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const Base = styled(Flex)`
  background: ${theme.colors.gray};
  flex-direction: column;
  height: 100%;
`;

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    padding-top: ${theme.Header.height}px;
  }
`;

const App = (props:any) => {
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

export default App;
