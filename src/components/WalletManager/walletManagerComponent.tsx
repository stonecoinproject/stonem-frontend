import * as React from 'react';
import {
  Box,
  Flex,
  Text,
} from 'rebass';

import {
  WalletManagerTopBar,
  WalletManagerTransactionItem,
  WalletManagerTransactionForm,
  WalletManagerStatusBoard,
} from './';

import  { MnManagerCoinMerchants } from '../MnManagerSuite';
import { CapsText } from '../UI';
import {
  app,
  styles,
  theme,
} from '../../config';
import { TransactionDataInterface, TransactionMetaDataInterface } from '../../config/types'

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
 * Renders all the meta data for a particular transaction. 
 * 
 * @param {Array<TransactionMetaDataInterface>} meta  - Array of meta information couplets.
 * 
 * @returns {React.ReactNode} 
 */
const renderWalletManagerTransactionItemMetaData = (meta:TransactionMetaDataInterface[]) => {
  return (
    meta.map((metadata, i:number) => {
      const {
        key,
        value,
      } = metadata;
      return (
        <Flex
          key={i}
          mb={2}
        >
          <Text
            fontSize={2}
            fontWeight={'600'}
            mr={2}
          >
            {key}:
          </Text>
          <Text fontSize={3}>{value}</Text>
        </Flex>
      );
    })
  )
}

/**
 * Renders all wallet manager transaction items.
 * 
 * @param {Object} transaction  - Transaction information.
 * @param {Number} index        - Index id of item. 
 * 
 * @returns {React.ReactNode}
 */
const renderWalletManagerTransactionItem = ({
    amount,
    brand,
    date,
    meta,
    time,
    title,
  }:TransactionDataInterface,
  index:number) => {
    return (
    <WalletManagerTransactionItem
      amount={amount}
      brand={require(`../IncomeStatsSuite/${brand}`)}
      date={date}
      key={index}
      hasNegativeIndex={amount[0] === '-'}
      time={time}
      title={title}
      mb={2}
    >
      <Box py={3}>{renderWalletManagerTransactionItemMetaData(meta)}</Box>
    </WalletManagerTransactionItem>
  );
}

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
      width={1 / 3}
    >
      <Box py={2}>
        <CapsText mb={4}>Latest Transactions</CapsText>
        {app.transactionData.map((
            transaction:TransactionDataInterface,
            index:number
          ) => renderWalletManagerTransactionItem(transaction, index))
        }
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
