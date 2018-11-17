import * as React from 'react';
import styledComponents from 'styled-components';
import { Text } from 'rebass';

const CapsText = styledComponents(Text)`
  text-transform: uppercase
`;

export default CapsText;
