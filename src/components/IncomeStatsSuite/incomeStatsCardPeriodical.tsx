import * as React from 'react';
import {
    Card,
    Box,
    Flex,
    Image,
} from 'rebass';
import { default as IncomeStat } from './incomeStat';
import { default as IncomeStatButton } from './incomeStatButton';
import { default as IncomeStatsCard } from './incomeStatsCard';
import { default as IncomeStatsCardHeading } from './incomeStatsCardHeading';

import { CapsText } from '../UI';
import { theme } from '../../config';
import { isEven } from '../../utils/helpers';

type periodInterface = {
  label: string;
  incomeFigures: String[];
};

type incomeStatsCardPeriodicalProps = {
  requiredCoin: string;
  periodicalData: periodInterface[];
  mb?: number;
  px?: number;
  py?: number;
  width?: number;
  style?: object;
};

const styles = {
  incomeStatsCardPeriodicalContainer: {
    border: 'solid 2px #4da1ff',
    borderRadius: theme.radiusSizes[0],
    boxShadow: '0 0 15px rgba(77, 161, 255, 0.07)',
  },
};

const incomeStatsCardPeriodical = ({
    requiredCoin,
    periodicalData,
    ...props }:incomeStatsCardPeriodicalProps) => {
  return (
      <Box {...props}>
        <Card
          p={3}
          borderRadius={4}
          style={styles.incomeStatsCardPeriodicalContainer}
        >
          <Flex
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Box mb={3}>
              <Image src={require('./logo-copy.png')}/>
            </Box>
            <CapsText
              mb={3}
              fontSize={1}
            >
              Required Coin: {requiredCoin}
            </CapsText>
          </Flex>

          <Flex
            flexWrap={'wrap'}
            mx={-2}
            mb={3}
          >
            {periodicalData.map((
                period:periodInterface,
                i:number,
            ) => {
              // Constructs a table for displaying periodical data.
              const xBorder = isEven(i + 1) ? 'borderLeft' : 'borderRight';
              const yBorder = i > 1 ? 'borderTop' : 'borderBottom';

              return (
                    <IncomeStatsCard
                        width={1 / 2}
                        style={{
                          [xBorder]: `1px solid ${theme.colors.lightgray}`,
                          [yBorder]: `1px solid ${theme.colors.lightgray}`,
                        }}
                        key={i}
                    >
                        <IncomeStatsCardHeading>{period.label}</IncomeStatsCardHeading>
                        {
                          period.incomeFigures.map((incomeFigure, i) => (
                            <IncomeStat key={i}>{incomeFigure}</IncomeStat>
                          ))
                        }
                    </IncomeStatsCard>
              );
            })}
          </Flex>
          <IncomeStatButton
            variant={'primaryLarge'}
            mb={-(theme.space[3] * 2)}
          >
            Create Now
          </IncomeStatButton>
        </Card>
      </Box>
  );
};

export default incomeStatsCardPeriodical;
