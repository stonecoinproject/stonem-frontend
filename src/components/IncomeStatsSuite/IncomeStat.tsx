import * as React from 'react';
import { Text } from 'rebass';
import { CapsText } from '../../components/UI';

const IncomeStat = ({ children, isAllCaps, ...props }:any) => {
  const TextRenderer = isAllCaps ? CapsText : Text;

  return (
        <TextRenderer
          color={'copywritegray'}
          fontSize={1}
          mb={1}
          {...props}
        >
          { children }
       </TextRenderer>
  );
};

IncomeStat.defaultProps = {
  isAllCaps: true,
};

export default IncomeStat;
