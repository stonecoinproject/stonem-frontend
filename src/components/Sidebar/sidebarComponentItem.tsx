import * as React from 'react';
import {
    Box,
    Flex,
} from 'rebass';

const sidebarComponentItem = ({
    children,
    isHighlighted,
    ...props }:any) => {
  return (
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        {...props}
      >
          <Box px={3}>
            {children}
          </Box>
      </Flex>
  );
};

sidebarComponentItem.defaultProps = {
  isHighlighted: false,
};

export default sidebarComponentItem;
