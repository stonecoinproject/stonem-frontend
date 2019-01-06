import * as React from 'react';
import {
  Box,
  Flex,
} from 'rebass';

import {
  FilterCriteriaBar,
  FilterCriteriaHeading,
  FilterLayoutSwitcher,
  FilterSearchBar,
} from '../FilterSuite';

import {
  IncomeStatsCardMini,
  IncomeStatsCardPeriodical,
} from '../IncomeStatsSuite';

import {
  app,
  styles as sharedStyles,
  theme,
} from '../../config';

interface HomeComponentStyles {
  homeComponentFiltersContainer: object;
}

const styles:HomeComponentStyles = {
  homeComponentFiltersContainer: {
    borderBottom: `1px solid ${theme.colors.lightgray}`,
  },
};

/**
 * Renders the top bar for the home component.
 */
const renderTopBar = () => (
  <Box
    pb={3}
    style={styles.homeComponentFiltersContainer}
  >
    <FilterCriteriaHeading />
    <Flex>
      <FilterCriteriaBar filterCriteria={app.filterCriteria}/>
      <Flex style={{
        flex: 1,
      }}>
        <FilterSearchBar/>
      </Flex>
      <FilterLayoutSwitcher/>
    </Flex>
  </Box>
);

/**
 * Renders income stat mini cards.
 */
const renderMiniCards = () => {
  return (
    <Flex width={2 / 3} flexWrap={'wrap'}>
    {[...Array(12).keys()].map(() => (
      <IncomeStatsCardMini
        key={Math.random()}
        price={app.incomeSummaries[0].price}
        ROI={app.incomeSummaries[0].ROI}
        worth={app.incomeSummaries[0].worth}
        px={2}
        py={2}
        mb={4}
        bg={'white'}
        width={1 / 4}
      />
    ))}
    </Flex>
  );
};

/**
 * Renders the home screen.
 *
 * @param {Object} props
 */
const homeComponent = (props:any) => {
  return (
    <Box
      bg={'white'}
      mx={5}
      my={4}
      px={4}
      pb={4}
      style={sharedStyles.mainComponentContainer}
    >
      {renderTopBar()}
      <Flex>
        <IncomeStatsCardPeriodical
          data-testid={'income-stats-card-periodical'}
          requiredCoin={'1500 STONE'}
          periodicalData = {app.periodicalData}
          px={2}
          py={2}
          width={1 / 3}
          onCreateButtonClick={e => props.history.push('/signup')}
        />
        {renderMiniCards()}
      </Flex>
    </Box>
  );
};

export default homeComponent;
