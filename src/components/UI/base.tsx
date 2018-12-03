import * as React from 'react';
import {
    Flex,
  } from 'rebass';
import styledComponents from 'styled-components';
import { theme } from '../../config';

type baseProps = {
  children?: React.ReactNode,
  style?: React.CSSProperties,
  width?: any,
};

const baseStyles: any = {
  display: 'flex',
  background: `${theme.colors.gray}`,
  flexDirection: 'row',
  height: '100%',
};

const base:React.SFC<baseProps> = ({
  children,
  style,
}) => {
  return (
    <div style={{
      ...style,
      ...baseStyles,
    }}>{children}</div>
  );
};

export default base;
