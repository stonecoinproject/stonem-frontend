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
  width: 100%;
  height: 100%;
`;

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const App = (props:any) => {
  const { children } = props;

  return (
    <Base>
      <GlobalStyle />
        <Sidebar/>
        <Base flexDirection={'column'}>
          <Header/>
          <Base flexDirection={'column'}>{children}</Base>
        </Base>
    </Base>
  );
};

export default App;
