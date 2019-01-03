import * as React from 'react';

import { Collapsible } from '../UI';
import { RecentTransactionItem } from './';
import {
  Box,
  Text,
} from 'rebass';

/**
 * Renders the collateral collapsible.
 *
 * @returns {React.ReactNode}
 */
const renderCollateralPanel = ():React.ReactNode => (
  <Collapsible title={'Collateral'}>
    <Box
      py={3}
      px={2}
    >
      <Text fontSize={3}>Collateral</Text>
    </Box>
  </Collapsible>
);

/**
 * Renders the recent transactions collapsible.
 *
 * @returns {React.ReactNode}
 */
const renderRecentTransactionsPanel = ():React.ReactNode => (
  <Collapsible title={'Recent Transactions'}>
    <Box
      py={3}
      px={2}
      width={1}
    >
      <Box mb={4}>
        <RecentTransactionItem
          transactionAmount={'6.00'}
          transactionTitle={'Mn 1'}
          transactionDate={'11/07/19'}
          transactionTime={'06:21'}
        />
      </Box>

      <Box>
        <RecentTransactionItem
          transactionAmount={'6.00'}
          transactionTitle={'Mn 1'}
          transactionDate={'09/07/19'}
          transactionTime={'03:21'}
        />
      </Box>
    </Box>
  </Collapsible>
);
/**
 * Renders the logs collapsible.
 *
 * @returns {React.ReactNode}
 */
const renderLogsPanel = ():React.ReactNode => (
  <Collapsible title={'Log'}>
    <Box
      py={3}
      px={2}
    >
      <Text fontSize={3}>Log</Text>
    </Box>
  </Collapsible>
);

/**
 * Renders the wallet collapsible.
 *
 * @returns {React.ReactNode}
 */
const renderWalletPanel = ():React.ReactNode => (
  <Collapsible title={'Wallet'}>
    <Box
      py={3}
      px={2}
    >
      <Text fontSize={3}>Wallet</Text>
    </Box>
  </Collapsible>
);

/**
 * Renders all collapsible components with info.
 *
 * @returns {React.ReactNode}
 */
const collapsibleInfo:React.SFC = () => {
  return (
    <Box width={1}>
      {renderCollateralPanel()}
      {renderRecentTransactionsPanel()}
      {renderLogsPanel()}
      {renderWalletPanel()}
    </Box>
  );
};

export default collapsibleInfo;
