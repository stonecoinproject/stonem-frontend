import * as React from 'react';
import {
    Box,
    Flex,
} from 'rebass';

type incomeStatCardProps = {
  children?: React.ReactNode;
  mb?: number;
  width?: number;
  style?: object;
};

const incomeStatsCard = ({ children, ...props }:incomeStatCardProps) => (
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
