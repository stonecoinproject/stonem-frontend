import * as React from 'react';
import styledComponents from 'styled-components';
import { Box } from 'rebass';
import { theme } from '../../config';

type dotProps = {
  children?: React.ReactNode;
  size?: string;
  style?: object;
};

const dotStyles = {
  background: theme.colors.blue,
  borderRadius: '50%',
};

const dot = ({
  children,
  size,
  style,
  ...props }: dotProps) => {
  return (
    <div
      style={{
        ...dotStyles,
        ...style,
        width: size,
        height: size,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

dot.defaultProps = {
  size: '10px',
};

export default dot;
