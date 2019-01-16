import * as React from 'react';
import {
  theme,
  styles,
} from '../../config';
import styledComponents from 'styled-components';
import { Box } from 'rebass';

const containerSection = styledComponents(Box)`
  background: white;
  margin: ${theme.space[4]}px ${theme.space[2]};
  padding: ${theme.space[3]}px ${theme.space[2]};
  height: 95%;
  borderRadius: ${theme.radiusSizes[1]}px;
`;

export default containerSection;
