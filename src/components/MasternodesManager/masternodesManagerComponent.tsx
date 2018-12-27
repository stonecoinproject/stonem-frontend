import * as React from 'react';
import {
  Box,
  Card,
  Flex,
  Image,
} from 'rebass';

import {
  CapsText,
  DeadCentered,
  DisplayCard,
} from '../UI';

import { MnManagerStatusCard } from '../MnManagerSuite';

import { theme, app } from '../../config';

interface ComponentStyles {
  ComponentContainer: React.CSSProperties;
  ComponentFiltersContainer: React.CSSProperties;
  CoinMerchantsContainer: React.CSSProperties;
  MasternodesStatusBoardContainer: React.CSSProperties;
}

const styles:ComponentStyles = {
  ComponentContainer: {
    height: '95%',
    borderRadius: theme.radiusSizes[1],
  },
  ComponentFiltersContainer: {
  },
  CoinMerchantsContainer: {
    borderBottom: `2px solid ${theme.colors.gray}`,
  },
  MasternodesStatusBoardContainer: {},
};

/**
 * Renders the top bar for the component.
 *
 * @returns React.ReactNode
 */
const renderTopBar = () => (
  <Box
    py={3}
    style={styles.ComponentFiltersContainer}
  >
    <CapsText
      color={'darkergray'}
      fontSize={0}
    >
      Your MasterNodes
    </CapsText>
  </Box>
);

/**
 * Renders the coin merchants.
 *
 * @returns {React.ReactNode}
 */
const renderCoinMerchants = () => (
  <Flex
    mb={3}
    pt={2}
    pb={3}
    style={styles.CoinMerchantsContainer}
  >
    <Box
      mr={1}
      width={1 / 8}
    >
      <DisplayCard
        displayCaption={'Stone'}
        displayPhoto={'stone-logo.png'}
        isHighlighted
      />
    </Box>
    <Box
      mr={1}
      width={1 / 8}
    >
      <DisplayCard
        displayCaption={'TRC'}
        displayPhoto={'terracoin-logo.png'}
      />
    </Box>
  </Flex>
);

/**
 * Renders the masternodes status board.
 */
const renderMasternodesStatusBoard = () => {
  return (
    <Box
      pt={2}
      pb={3}
      style={styles.MasternodesStatusBoardContainer}
    >
      <Flex mb={3}>
        <Box
          mr={1}
          width={1 / 4}
        >
          <MnManagerStatusCard
            isHighlighted
            mnLastRenewalDate={'21/07/2018'}
            mnLastRenewalTime={'05:33'}
            mnStatusCode={'enabled'}
            mnTitle={'MN 1'}
          />
        </Box>

        <Box
          mr={1}
          width={1 / 4}
        >
          <MnManagerStatusCard
            isHighlighted={false}
            mnLastRenewalDate={'21/07/2018'}
            mnLastRenewalTime={'05:33'}
            mnStatusCode={'enabled'}
            mnTitle={'MN 2'}
          />
        </Box>

        <Box
          mr={1}
          width={1 / 4}
        >
          <MnManagerStatusCard
            isHighlighted={false}
            mnLastRenewalDate={'21/07/2018'}
            mnLastRenewalTime={'05:33'}
            mnStatusCode={'restart-required'}
            mnTitle={'MN 3'}
          />
        </Box>

      </Flex>

      <Flex>
        <Box
          mr={1}
          width={1 / 4}
        >
          <MnManagerStatusCard
            isHighlighted={false}
            mnLastRenewalDate={'21/07/2018'}
            mnLastRenewalTime={'05:33'}
            mnStatusCode={'off'}
            mnTitle={'MN 4'}
          />
        </Box>
      </Flex>

    </Box>
  );
};

/**
 * Renders the masternodes manager.
 *
 * @returns {React.ReactNode}
 */
const masternodesManagerComponent = () => {
  return (
    <Box
      bg={'white'}
      mx={5}
      my={4}
      px={4}
      pb={4}
      style={styles.ComponentContainer}
    >
      {renderTopBar()}
      {renderCoinMerchants()}
      {renderMasternodesStatusBoard()}
    </Box>
  );
};

export default masternodesManagerComponent;
