import * as React from 'react';
import { Text } from 'rebass';
import { CapsText } from '../../components/UI';

const incomeStat = ({
  children,
  isAllCaps,
  ...props }:any) => {
  const specifiedProps:any = {
    color: 'copywritegray',
    fontSize: 1,
    mb: 1,
    ...props,
  };

  return (
      isAllCaps ?
        <CapsText {...specifiedProps}>{ children }</CapsText> :
        <Text {...specifiedProps}>{ children }</Text>
  );
};

incomeStat.defaultProps = {
  isAllCaps: false,
};

export default incomeStat;
