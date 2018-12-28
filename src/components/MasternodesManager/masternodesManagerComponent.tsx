import * as React from 'react';
import {
  Box,
  Flex,
} from 'rebass';

import {
  MasternodeManagerTopBar,
  MasternodesManagerCoinMerchants,
  MasternodesManagerStatusBoard,
  MasternodesManagerUptimeStats,
  MasternodesManagerInfoTable,
} from '../MasternodesManager';

import { theme } from '../../config';

interface ComponentStyles {
  ComponentContainer: React.CSSProperties;
  CoinMerchantsContainer: React.CSSProperties;
}

const styles:ComponentStyles = {
  ComponentContainer: {
    height: '95%',
    borderRadius: theme.radiusSizes[1],
  },
  CoinMerchantsContainer: {
    borderBottom: `2px solid ${theme.colors.gray}`,
  },
};

/**
 * Renders the masternodes manager.
 *
 * @returns {React.ReactNode}
 */
const masternodesManagerComponent = () => {
  return (
    <Flex width={1}>
      <Box
        bg={'white'}
        ml={4}
        mr={2}
        my={4}
        px={4}
        pb={4}
        style={styles.ComponentContainer}
        width={6 / 10}
      >
        <MasternodeManagerTopBar />
        <MasternodesManagerCoinMerchants style={styles.CoinMerchantsContainer} />
        <MasternodesManagerStatusBoard />
      </Box>
      <Box
        bg={'white'}
        my={4}
        mx={2}
        px={3}
        py={2}
        style={styles.ComponentContainer}
        width={4 / 10}
      >
        <Box py={2}>
          <MasternodesManagerUptimeStats />
          <MasternodesManagerInfoTable />
        </Box>
      </Box>
    </Flex>
  );
};

export default masternodesManagerComponent;
