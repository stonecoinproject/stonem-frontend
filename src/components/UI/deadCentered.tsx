import * as React from 'react';
import { Flex } from 'rebass';

type deadCenteredProps = {
  /** Child elements that should be centered in the middle. */
  children: React.ReactNode,
  style?: React.CSSProperties,
  mt?: number,
  my?: number,
  props?: any,
};

/**
 * Centers child elements vertically, horizontally or in both directions.
 *
 * @param { React.ReactNode } children - Child elements to be centered.
 *
 * @returns { React.ReactNode }
 */
const deadCentered: React.SFC<deadCenteredProps> = ({
  children,
  ...props
}) => {
  return (
    <Flex
      alignItems={'center'}
      flexDirection={'column'}
      justifyContent={'center'}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default deadCentered;
