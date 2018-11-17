import React from 'react';
import {
  Button,
  Box,
  Card,
  Image,
  Flex,
  Text,
} from 'rebass';
import styled from 'styled-components';

import {
  FilterCriteriaBar,
  FilterCriteriaHeading,
  FilterLayoutSwitcher,
  FilterSearchBar,
} from '../../components/FilterSuite';

import { CapsText } from '../../components/UI';
import { theme, app } from '../../config';

interface HomeComponentStyles {
  HomeComponentContainer: object;
  HomeComponentFiltersContainer: object;
}

const styles:HomeComponentStyles = {
  HomeComponentContainer: {
    height: '95%',
  },
  HomeComponentFiltersContainer: {
    borderBottom: `1px solid ${theme.colors.lightgray}`,
  },
};

const IncomeStatsCardPeriodical = ({ requiredCoin, ...props }:any) => {
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
            <Image src={require('../Home/logo-copy.png')}/>
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
          <IncomeStatsCard
            width={1 / 2}
            css={{
              borderRight: `1px solid ${theme.colors.lightgray}`,
              borderBottom: `1px solid ${theme.colors.lightgray}`,
            }}
          >
            <IncomeStatsCardHeading>Daily Income</IncomeStatsCardHeading>
            <IncomeStat>$0.4889</IncomeStat>
            <IncomeStat>0.00005943 BTC</IncomeStat>
            <IncomeStat>14.496 STONE</IncomeStat>
          </IncomeStatsCard>

          <IncomeStatsCard
            width={1 / 2}
            css={{
              borderLeft: `1px solid ${theme.colors.lightgray}`,
              borderBottom: `1px solid ${theme.colors.lightgray}`,
            }}
          >
            <IncomeStatsCardHeading>Weekly Income</IncomeStatsCardHeading>
            <IncomeStat>$3.4222</IncomeStat>
            <IncomeStat>0.000041600 BTC</IncomeStat>
            <IncomeStat>101.2172 STONE</IncomeStat>
          </IncomeStatsCard>
          
          <IncomeStatsCard
            width={1 / 2}
            css={{
              borderRight: `1px solid ${theme.colors.lightgray}`,
              borderTop: `1px solid ${theme.colors.lightgray}`,
            }}
          >
            <IncomeStatsCardHeading>Monthly Income</IncomeStatsCardHeading>
            <IncomeStat>$14.6664</IncomeStat>
            <IncomeStat>0.0017827 BTC</IncomeStat>
            <IncomeStat>433.7880 STONE</IncomeStat>
          </IncomeStatsCard>

          <IncomeStatsCard
            width={1 / 2}
            css={{
              borderLeft: `1px solid ${theme.colors.lightgray}`,
              borderTop: `1px solid ${theme.colors.lightgray}`,
            }}
          >
            <IncomeStatsCardHeading>Yearly Income</IncomeStatsCardHeading>
            <IncomeStat>$178.4409</IncomeStat>
            <IncomeStat>0.02169157 BTC</IncomeStat>
            <IncomeStat>5,277.7540 STONE</IncomeStat>
          </IncomeStatsCard>
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

const IncomeStatsCardMini = ({
  price,
  ROI,
  worth,
}:any) => {
  return (
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
  );
};

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

const IncomeStatsCardHeading = ({ children }:any) => (
  <CapsText
    color={'darkgray'}
    fontSize={0}
    mb={3}
  >
    {children}
  </CapsText>
);

const IncomeStat = ({ children, isAllCaps, ...props }:any) => {
  const TextRenderer = isAllCaps ? CapsText : Text;

  return (
      <TextRenderer
        color={'copywritegray'}
        fontSize={1} 
        mb={1}
        {...props}
      >
        { children }
     </TextRenderer>
  );
};

IncomeStat.defaultProps = {
  isAllCaps: true,
};

const HomeComponent = () => (
  <Box
    bg={'white'}
    mx={5}
    my={4}
    px={4}
    css={styles.HomeComponentContainer}
  >
    <Box
      pb={3}
      css={styles.HomeComponentFiltersContainer}
    >
      <FilterCriteriaHeading />
      <Flex>
        <FilterCriteriaBar filterCriteria={app.filterCriteria}/>
        <FilterSearchBar/>
        <FilterLayoutSwitcher/>
      </Flex>
    </Box>

    <Flex
      flexWrap={'wrap'}
      mx={-2}
    >

      <IncomeStatsCardPeriodical
        requiredCoin={'1500 STONE'}
        px={2}
        py={2}
        width={1 / 3}
      />

      {[...Array(14).keys()].map((key, i) => (
      <Box
        px={2}
        py={2}
        width={1 / 6}
        key={i}
      >
        <IncomeStatsCardMini
          price={app.incomeSummaries[0].price}
          ROI={app.incomeSummaries[0].ROI}
          worth={app.incomeSummaries[0].worth}
        />
      </Box>
      ))}
    </Flex>    
  </Box>
);

export default HomeComponent;
