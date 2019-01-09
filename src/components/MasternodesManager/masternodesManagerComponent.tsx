import * as React from 'react';
import {
  Box,
  Button,
  Flex,
} from 'rebass';

import {
  MasternodeManagerTopBar,
  MasternodesManagerStatusBoard,
  MasternodesManagerUptimeStats,
  MasternodesManagerInfoTable,
} from '../MasternodesManager';

import  { MnManagerCoinMerchants } from '../MnManagerSuite';

import {
  styles as sharedStyles,
  theme,
} from '../../config';
import { MasternodesManagerCollapsibleInfo } from './';
import { CapsText } from '../UI';

interface ComponentStyles {
  CoinMerchantsContainer: React.CSSProperties;
}

const styles:ComponentStyles = {
  CoinMerchantsContainer: {
    borderBottom: `2px solid ${theme.colors.gray}`,
  },
};

const renderMasternodesDestroyButton = () => (
  <Box mt={3}>
    <Button
      py={4}
      variant={'passiveAction'}
    >
      <CapsText
        fontSize={3}
        fontWeight={'normal'}
      >
        Remove Masternode
      </CapsText>
    </Button>
  </Box>
);

/**
 * Renders the main section.
 *
 * @returns {React.ReactNode}
 */
const renderMainSection = () => {
  return (
    <Box
      bg={'white'}
      ml={4}
      mr={2}
      my={4}
      px={4}
      pb={4}
      style={sharedStyles.mainComponentContainer}
      width={6 / 10}
    >
      <MasternodeManagerTopBar />
      <MnManagerCoinMerchants style={styles.CoinMerchantsContainer} />
      <MasternodesManagerStatusBoard data-testid={'masternodes-manager-status-board'} />
    </Box>
  );
};

/**
 * Renders the side information section.
 *
 * @returns {React.ReactNode}
 */
const renderAsideSection = () => {
  return (
    <Box
      bg={'white'}
      my={4}
      mx={2}
      px={3}
      py={2}
      style={sharedStyles.mainComponentContainer}
      width={4 / 10}
    >
      <Box py={2}>
        <MasternodesManagerUptimeStats />
        <MasternodesManagerInfoTable />
        <MasternodesManagerCollapsibleInfo />
        {renderMasternodesDestroyButton()}
      </Box>
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
    <Flex width={1}>
      {renderMainSection()}
      {renderAsideSection()}
    </Flex>
  );
};

export default masternodesManagerComponent;
