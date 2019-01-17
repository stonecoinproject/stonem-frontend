import * as React from 'react';
import {
  Box,
  Flex,
} from 'rebass';
import { app } from '../../config';
import { BalanceDataInterface } from '../../config/types';

import { CapsText } from '../UI';

import { WalletManagerBalanceCard } from './';
import { default as WalletBalancesList } from './generics/walletBalancesList';

const renderWalletBalancesList = (
  balance:BalanceDataInterface,
  index: number) => (
  <Box
    key={index}
    mr={index === (app.balanceData.length - 1) ? 0 : 4}
    width={1 / 4}
  >
  <WalletManagerBalanceCard
    amount={balance.amount}
    title={balance.title}
  />
  </Box>
);

/**

* Renders the wallet status board.
 *
 * @returns {React.ReactNode}
 */
const statusBoard = ({ ...props }) => {
  return (
    <Box
      pt={1}
      pb={3}
      {...props}
    >
      <Box>
        <CapsText
          color={'placeholdergray'}
          textAlign={'center'}
        >
          Stonecoin Wallet
        </CapsText>
      </Box>
      {<Flex mt={4}>
        <WalletBalancesList
          items={app.balanceData}
          itemRenderer={renderWalletBalancesList}
        />
      </Flex>}
    </Box>
  );
};

export default statusBoard;
