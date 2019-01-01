import * as React from 'react';
import styledComponents from 'styled-components';
import { Box } from 'rebass';
import { theme } from '../../config';

type dotProps = {
  /** Dot background color. */
  bg?: string;
  /** Dot child elements. */
  children?: React.ReactNode;
  /** Vertical and horizontal size for dot. */
  size?: string;
  /** Dot styling. */
  style?: React.CSSProperties;
};

const dotStyles = (background = theme.colors.blue) => {
  return ({
    background,
    borderRadius: '50%',
  });
};

/**
 * Creates a configurable dot.
 *
 * @param {String} bg                 - Dot background color.
 * @param {React.ReactNode} children  - Child elements within dot.
 * @param {String} size               - Dot size.
 * @param {React.CSSProperties}       - Dot styling.
 *
 * @returns {React.ReactNode}
 */
const dot = ({
  bg,
  children,
  size,
  style,
  ...props }: dotProps) => {
  return (
    <div
      style={{
        ...dotStyles(bg),
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
  bg: theme.colors.blue,
  size: '10px',
};

export default dot;
