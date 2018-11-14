import React from 'react';
import { Box } from 'rebass';
import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../../config';

const Base = styled(Box)`
  background: ${theme.colors.darkgray};
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
      {children}
    </Base>
  );
};

export default App;
