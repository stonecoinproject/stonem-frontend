import React from 'react';
import { CapsText } from '../../components/UI';

const IncomeStatsCardHeading = ({ children }:any) => (
    <CapsText
      color={'darkgray'}
      fontSize={0}
      mb={3}
    >
      {children}
    </CapsText>
  );

export default IncomeStatsCardHeading;
