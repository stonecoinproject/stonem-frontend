import React from 'react';
import {
    Box,
    Flex,
} from 'rebass';

const IncomeStatsCard = ({ children, ...props }:any) => (
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

export default IncomeStatsCard;
