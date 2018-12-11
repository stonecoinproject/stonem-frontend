import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { theme } from '../../config';

const globalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

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

export default globalStyle;
