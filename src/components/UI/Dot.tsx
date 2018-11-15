import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';

const Dot = styled(Box)`
  width: 10px;
  height: 10px;
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 9999px;
`;

export default Dot;
