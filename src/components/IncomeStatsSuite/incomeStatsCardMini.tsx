import * as React from 'react';
import {
    Box,
    Image,
} from 'rebass';
import { default as IncomeStat } from './incomeStat';
import { default as IncomeStatsCard } from './incomeStatsCard';
import { default as IncomeStatsCardButton } from './incomeStatsCardButton';

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
            <Box>
                <Image width={50} src={require('./logo-mini.png')}/>
            </Box>
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

            <IncomeStatsCardButton
                mb={-(theme.space[3] * 2)}
                variant={'outlineDefault'}
                text={'Create'}
            />

        </IncomeStatsCard>
    </Box>
  );
};

export default incomeStatsCardMini;
