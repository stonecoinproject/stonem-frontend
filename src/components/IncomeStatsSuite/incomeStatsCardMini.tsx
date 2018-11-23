import * as React from 'react';
import {
    Button,
    Box,
    Flex,
} from 'rebass';
import { default as IncomeStat } from './incomeStat';
import { default as IncomeStatsCard } from './incomeStatsCard';

import { CapsText } from '../UI';
import { theme } from '../../config';

const incomeStatsCardMini = ({
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

export default incomeStatsCardMini;
