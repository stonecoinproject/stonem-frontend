import * as React from 'react';
import { CapsText } from '../UI';

type incomeStatCardHeadingProps = {
  children?: React.ReactNode;
};

const incomeStatsCardHeading = ({ children }:incomeStatCardHeadingProps) => (
    <CapsText
      color={'darkgray'}
      fontSize={0}
      mb={3}
    >
      {children}
    </CapsText>
  );

export default incomeStatsCardHeading;
