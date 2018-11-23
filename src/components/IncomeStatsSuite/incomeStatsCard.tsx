import * as React from 'react';
import {
    Box,
    Flex,
} from 'rebass';

const incomeStatsCard = ({ children, ...props }:any) => (
    <Box
      px={2}
      py={2}
      {...props}
    >
      <Flex
        flexDirection={'column'}
        alignItems={'center'}
      >
        { children }
      </Flex>

    </Box>
  );

export default incomeStatsCard;
