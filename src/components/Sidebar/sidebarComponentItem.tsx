import * as React from 'react';
import {
    Box,
    Flex,
} from 'rebass';

const sidebarComponentItem = ({
    children,
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

export default sidebarComponentItem;
