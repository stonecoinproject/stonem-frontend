import React from 'react';
import {
    Card,
    Button,
    Box,
    Flex,
    Image,
} from 'rebass';
import IncomeStat from './IncomeStat';
import IncomeStatsCard from './IncomeStatsCard';
import IncomeStatsCardHeading from './IncomeStatsCardHeading';

import { CapsText } from '../../components/UI';
import { theme } from '../../config';
import { isEven } from '../../utils/helpers';

const IncomeStatsCardPeriodical = ({
    requiredCoin,
    periodicalData,
    ...props }:any) => {
  return (
      <Box {...props}>
        <Card
          p={3}
          borderRadius={4}
          css={{
            border: 'solid 2px #4da1ff',
            borderRadius: theme.radiusSizes[0],
          }}
          boxShadow={'0 0 15px rgba(77, 161, 255, 0.07)'}
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
                period:any,
                i:number,
            ) => {
              // Constructs a table for displaying periodical data.
              const xBorder = isEven(i + 1) ? 'borderLeft' : 'borderRight';
              const yBorder = i > 1 ? 'borderTop' : 'borderBottom';
              
              return (
                    <IncomeStatsCard
                        width={1 / 2}
                        css={{
                          [xBorder]: `1px solid ${theme.colors.lightgray}`,
                          [yBorder]: `1px solid ${theme.colors.lightgray}`,
                        }}
                        key={i}
                    >
                        <IncomeStatsCardHeading>{period.label}</IncomeStatsCardHeading>
                        <IncomeStat>$0.4889</IncomeStat>
                        <IncomeStat>0.00005943 BTC</IncomeStat>
                        <IncomeStat>14.496 STONE</IncomeStat>
                    </IncomeStatsCard>      
              );
            })}  
          </Flex>
          
          <Flex
            flexDirection={'column'}
            alignItems={'center'}
            mb={-(theme.space[3] * 2)}
          >
            <Button variant={'primaryLarge'}>
              <CapsText fontSize={2}>Create Now</CapsText>
            </Button>
          </Flex>
        </Card>      
      </Box>
  );
};
  
export default IncomeStatsCardPeriodical;
