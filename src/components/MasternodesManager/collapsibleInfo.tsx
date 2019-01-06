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

type renderCollapsible = {
  title?: string,
};

/**
 * Renders the collapsible with a title.
 *
 * @returns {React.ReactNode}
 */
const renderCollapsible = ({ title }:renderCollapsible):React.ReactNode => (
  <Collapsible title={title}>
    <CollapsibleContentContainer>
      <Text fontSize={3}>{title}</Text>
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
 * Renders all collapsible components with info.
 *
 * @returns {React.ReactNode}
 */
const collapsibleInfo:React.SFC = () => {
  return (
    <Box width={1}>
      {renderCollapsible({ title: 'Collateral' })}
      {renderRecentTransactionsPanel()}
      {renderCollapsible({ title: 'Logs' })}
      {renderCollapsible({ title: 'Wallets' })}
    </Box>
  );
};

export default collapsibleInfo;
