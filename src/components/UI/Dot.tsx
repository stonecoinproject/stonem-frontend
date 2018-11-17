import * as React from 'react';
import styledComponents from 'styled-components';
import { Box } from 'rebass';

const dot = styledComponents(Box)`
  width: 10px;
  height: 10px;
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 9999px;
`;

export default dot;
