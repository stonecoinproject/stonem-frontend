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
      width={1 / 3}
    >
      <Box py={2}>
        <CapsText mb={4}>Latest Transactions</CapsText>
        {app.transactionData.map((transaction, index) => {
          const {
            amount,
            brand,
            date,
            meta,
            time,
            title,
          } = transaction;

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
              <Box py={3}>
                {meta.map((metadata, i) => {
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
                })}
              </Box>
            </WalletManagerTransactionItem>
          );
        })}
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
