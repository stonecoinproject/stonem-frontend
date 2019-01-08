import * as React from 'react';
import {
  Box,
  Flex,
} from 'rebass';

import {
  WalletManagerStatusBoard,
  WalletManagerTopBar,
  WalletManagerTransactionForm,
} from './';

import  { MnManagerCoinMerchants } from '../MnManagerSuite';
import {
  styles,
  theme,
} from '../../config';

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
      style={styles.mainComponentContainer}
      width={6 / 10}
    >
      <WalletManagerTopBar />
      <MnManagerCoinMerchants style={styles.coinMerchantsContainer} />
      <WalletManagerStatusBoard
        data-testid={'wallet-manager-status-board'}
        pb={4}
        style={{
          borderBottom: `1px solid ${theme.colors.gray}`,
        }}
      />
      <WalletManagerTransactionForm />
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
      style={styles.mainComponentContainer}
      width={4 / 10}
    >
      <Box py={2}>
      </Box>
    </Box>
  );
};

/**
 * Renders the wallets manager.
 *
 * @returns {React.ReactNode}
 */
const walletManagerComponent = () => {
  return (
    <Flex width={1}>
      {renderMainSection()}
      {renderAsideSection()}
    </Flex>
  );
};

export default walletManagerComponent;
