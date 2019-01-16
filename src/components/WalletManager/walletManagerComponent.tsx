import * as React from 'react';
import {
  Box,
  Flex,
  Text,
} from 'rebass';

import { default as WalletManagerTransactionItem } from './transactionItem';
import { default as WalletManagerTransactionForm } from './transactionForm';
import { default as WalletManagerStatusBoard } from './statusBoard';
import { default as WalletTransactionItemList } from './generics/transactionItemList';

import { default as MnManagerCoinMerchants } from '../MnManagerSuite/mnManagerCoinMerchants';
import { default as MnManagerTopBar } from '../MnManagerSuite/topBar';
import {
  CapsText,
  ContainerSection,
} from '../UI';

import {
  app,
  styles,
  theme,
} from '../../config';
import { TransactionDataInterface, TransactionMetaDataInterface } from '../../config/types';

/**
 * Renders the main section.
 *
 * @returns {React.ReactNode}
 */
const mainSection = (
  <ContainerSection
    ml={4}
    mr={2}
    my={4}
    px={4}
    width={6 / 10}
  >
    <MnManagerTopBar title={'Wallets'} />
    <MnManagerCoinMerchants style={styles.coinMerchantsContainer} />
    <WalletManagerStatusBoard
      data-testid={'wallet-manager-status-board'}
      pb={4}
      style={{
        borderBottom: `1px solid ${theme.colors.gray}`,
      }}
    />
    <WalletManagerTransactionForm />
  </ContainerSection>
);

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
  );
};

/**
 * Renders all wallet manager transaction items.
 *
 * @param {TransactionDataInterface} transaction  - Transaction information.
 * @param {Number} index        - Index id of item.
 *
 * @returns {React.ReactNode}
 */
const renderWalletManagerTransactionItem = (
  item:TransactionDataInterface,
  index: number,
  ) => {
  const {
    amount,
    brand,
    date,
    meta,
    time,
    title,
  } = item;

  return (
      <WalletManagerTransactionItem
        amount={amount}
        brand={require(`../IncomeStatsSuite/${brand}`)}
        date={date}
        hasNegativeIndex={amount[0] === '-'}
        key={index}
        time={time}
        title={title}
        mb={2}
      >
        <Box py={3}>{renderWalletManagerTransactionItemMetaData(meta)}</Box>
      </WalletManagerTransactionItem>
  );
};

/**
 * Renders the side information section.
 *
 * @returns {React.ReactNode}
 */
const asideSection = (
  <ContainerSection width={1 / 3}>
    <Box py={2}>
      <CapsText mb={4}>Latest Transactions</CapsText>
        <WalletTransactionItemList
          items={app.transactionData}
          itemRenderer={renderWalletManagerTransactionItem}
        />
    </Box>
  </ContainerSection>
);

/**
 * Renders the wallets manager.
 *
 * @returns {React.ReactNode}
 */
const walletManagerComponent = () => {
  return (
    <Flex width={1}>
      {mainSection}
      {asideSection}
    </Flex>
  );
};

export default walletManagerComponent;
