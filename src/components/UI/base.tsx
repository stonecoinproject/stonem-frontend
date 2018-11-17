import * as React from 'react';
import {
    Flex,
  } from 'rebass';
import styledComponents from 'styled-components';
import { theme } from '../../config';

const base = styledComponents(Flex)`
  background: ${theme.colors.gray};
  flex-direction: column;
  height: 100%;
`;

export default base;
