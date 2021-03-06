import * as React from 'react';
import {
    Box,
    Image,
} from 'rebass';
import { default as IncomeStat } from './incomeStat';
import { default as IncomeStatButton } from './incomeStatButton';
import { default as IncomeStatsCard } from './incomeStatsCard';

import { CapsText } from '../UI';
import { theme } from '../../config';

const styles:any = {
  IncomeStatsCardBase: {
    border: `1px solid ${theme.colors.lightgray}`,
    borderRadius: theme.radiusSizes[0],
    boxShadow: '0 2px 9px 0 rgba(0, 0, 0, 0.03)',
  },
};

type incomeStatCardMiniProps = {
  price: string;
  ROI: string;
  worth: string;
  style?: object;
  px?: number;
  py?: number;
  mb?: number;
  bg?: string;
  width?: number;
};

const incomeStatsCardMini = ({
    price,
    ROI,
    worth,
    ...props }:incomeStatCardMiniProps) => {
  return (
      <Box {...props}>
        <IncomeStatsCard style={styles.IncomeStatsCardBase}>
            <Box mb={1}>
              <Image
                width={50}
                src={require('./stone-logo.png')}/>
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
          <IncomeStatButton mb={-(theme.space[3] * 2)}>Create</IncomeStatButton>
        </IncomeStatsCard>
    </Box>
  );
};

export default incomeStatsCardMini;
