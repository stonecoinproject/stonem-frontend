import * as React from 'react';
import styledComponents from 'styled-components';
import { Text } from 'rebass';
import { theme } from '../../config';

const centeredText = styledComponents(Text)`
  text-align: center;
  font-size: ${theme.fontSizes[1]}px
`;

export default centeredText;
