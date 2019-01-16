import * as React from 'react';
import {
  styles,
  theme,
} from '../../config';
import styledComponents from 'styled-components';
import {
  Box,
  BoxProps,
} from 'rebass';

type containerSectionProps = BoxProps & {
  /** React child elements to be rendered within the container section. */
  children: React.ReactNode,
};

/**
 * Sections off child elements within well defined bounds.
 *
 * @param {React.ReactNode} Object.children - React child elements to be rendered within the container section.
 *
 * @returns {React.ReactNode}
 */
const containerSection:React.SFC<containerSectionProps> = ({
  children,
  ...props
}) => {
  return (
    <Box
      bg={'white'}
      ml={4}
      mr={2}
      my={4}
      px={4}
      pb={4}
      style={styles.mainComponentContainer}
      {...props}
    >
      {children}
    </Box>
  );
};

export default containerSection;
