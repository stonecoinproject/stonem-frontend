import React from 'react';
import {
    Button,
    Box,
    Flex,
} from 'rebass';
import IncomeStat from './IncomeStat';
import IncomeStatsCard from './IncomeStatsCard';

import { CapsText } from '../../components/UI';
import { theme } from '../../config';

const IncomeStatsCardMini = ({
    price,
    ROI,
    worth,
    ...props }:any) => {
  return (
      <Box {...props}>
        <IncomeStatsCard
            css={{
              border: `1px solid ${theme.colors.lightgray}`,
              borderRadius: theme.radiusSizes[0],
            }}
        >
            <CapsText
            fontSize={3}
            fontWeight={'bold'}
            mb={2}
            >
            Stone
            </CapsText>
            <Box mb={3}>
            <IncomeStat
                isAllCaps={false}
                fontSize={0}
            >
                Price: {price}
            </IncomeStat>
            <IncomeStat
                isAllCaps={false}
                fontSize={0}
            >
                ROI: {ROI}
            </IncomeStat>
            <IncomeStat
                isAllCaps={false}
                fontSize={0}
            >
                Mn Worth: {worth}
            </IncomeStat>
            </Box>
    
            <Flex
            flexDirection={'column'}
            alignItems={'center'}
            mb={-(theme.space[3] * 2)}
            >
            <Button variant={'outlineDefault'}>
                <CapsText fontSize={1}>Create</CapsText>
            </Button>
            </Flex>
        </IncomeStatsCard>
    </Box>
  );
};
  
export default IncomeStatsCardMini;
