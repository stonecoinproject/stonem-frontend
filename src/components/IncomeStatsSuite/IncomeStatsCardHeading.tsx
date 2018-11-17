import * as React from 'react';
import { CapsText } from '../UI';

const incomeStatsCardHeading = ({ children }:any) => (
    <CapsText
      color={'darkgray'}
      fontSize={0}
      mb={3}
    >
      {children}
    </CapsText>
  );

export default incomeStatsCardHeading;
