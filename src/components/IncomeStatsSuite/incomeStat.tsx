import * as React from 'react';
import { Text } from 'rebass';
import { CapsText } from '../../components/UI';

const incomeStat = ({
  children,
  isAllCaps,
  ...props }:any) => {

  return (
    isAllCaps ?
        <CapsText
          color={'copywritegray'}
          fontSize={1}
          mb={1}
          {...props}
        >
          { children }
        </CapsText> :
        <Text
          color={'copywritegray'}
          fontSize={1}
          mb={1}
          {...props}
      >
        { children }
     </Text>

  );
};

incomeStat.defaultProps = {
  isAllCaps: false,
};

export default incomeStat;
