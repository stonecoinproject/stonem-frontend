import * as React from 'react';

import { Collapsible } from '../UI';
import { RecentTransactionItem } from './';
import {
  Box,
  Text,
} from 'rebass';

/**
 * Wraps the collapsible item content.
 *
 * @param {React.ReactNode} children -  React children element.
 */
// tslint:disable-next-line:variable-name
const CollapsibleContentContainer:React.SFC = ({ children }) => (
  <Box
    py={3}
    px={2}
  >
    {children}
  </Box>
);

/**
 * Renders the collateral collapsible.
 *
 * @returns {React.ReactNode}
 */
const renderCollateralPanel = ():React.ReactNode => (
  <Collapsible title={'Collateral'}>
    <CollapsibleContentContainer>
      <Text fontSize={3}>Collateral</Text>
    </CollapsibleContentContainer>
  </Collapsible>
);

/**
 * Renders the recent transactions collapsible.
 *
 * @returns {React.ReactNode}
 */
const renderRecentTransactionsPanel = ():React.ReactNode => (
  <Collapsible title={'Recent Transactions'}>
    <CollapsibleContentContainer>
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
    </CollapsibleContentContainer>
  </Collapsible>
);
/**
 * Renders the logs collapsible.
 *
 * @returns {React.ReactNode}
 */
const renderLogsPanel = ():React.ReactNode => (
  <Collapsible title={'Log'}>
    <CollapsibleContentContainer>
      <Text fontSize={3}>Log</Text>
    </CollapsibleContentContainer>
  </Collapsible>
);

/**
 * Renders the wallet collapsible.
 *
 * @returns {React.ReactNode}
 */
const renderWalletPanel = ():React.ReactNode => (
  <Collapsible title={'Wallet'}>
    <CollapsibleContentContainer>
      <Text fontSize={3}>Wallet</Text>
    </CollapsibleContentContainer>
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
