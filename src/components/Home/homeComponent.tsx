import * as React from 'react';
import {
  Button,
  Box,
  Card,
  Image,
  Flex,
  Text,
} from 'rebass';
import styledComponents from 'styled-components';

import {
  FilterCriteriaBar,
  FilterCriteriaHeading,
  FilterLayoutSwitcher,
  FilterSearchBar,
} from '../FilterSuite';

import {
  IncomeStat,
  IncomeStatsCard,
  IncomeStatsCardHeading,
  IncomeStatsCardMini,
  IncomeStatsCardPeriodical,
} from '../IncomeStatsSuite';

import { theme, app } from '../../config';

interface HomeComponentStyles {
  homeComponentContainer: object;
  homeComponentFiltersContainer: object;
}

const styles:HomeComponentStyles = {
  homeComponentContainer: {
    height: '95%',
  },
  homeComponentFiltersContainer: {
    borderBottom: `1px solid ${theme.colors.lightgray}`,
  },
};

const homeComponent = () => (
  <Box
    bg={'white'}
    mx={5}
    my={4}
    px={4}
    pb={4}
    css={styles.homeComponentContainer}
  >
    <Box
      pb={3}
      css={styles.homeComponentFiltersContainer}
    >
      <FilterCriteriaHeading />
      <Flex>
        <FilterCriteriaBar filterCriteria={app.filterCriteria}/>
        <FilterSearchBar/>
        <FilterLayoutSwitcher/>
      </Flex>
    </Box>

    <Flex>
      <IncomeStatsCardPeriodical
        data-testid={'income-stats-card-periodical'}
        requiredCoin={'1500 STONE'}
        periodicalData = {app.periodicalData}
        px={2}
        py={2}
        width={1 / 3}
      />

      <Flex width={2 / 3} flexWrap={'wrap'}>
      {[...Array(12).keys()].map((key, i) => (
        <IncomeStatsCardMini
          price={app.incomeSummaries[0].price}
          ROI={app.incomeSummaries[0].ROI}
          worth={app.incomeSummaries[0].worth}
          px={2}
          py={2}
          mb={4}
          bg={'white'}
          width={1 / 4}
          key={i}
        />
      ))}
      </Flex>

    </Flex>
  </Box>
);

export default homeComponent;
