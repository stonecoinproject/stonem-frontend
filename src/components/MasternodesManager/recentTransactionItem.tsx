import * as React from 'react';
import {
  Box,
  Flex,
  Text,
} from 'rebass';
import { CapsText } from '../UI';

type recentTransactionItemProps = {
  /** Transaction amount for recent transaction item. */
  transactionAmount: string,
  /** Transaction date for recent transaction item. Example: 27/11/12 */
  transactionDate: string,
  /** Transaction time for recent transaction item. */
  transactionTime: string,
  /** Transaction title. */
  transactionTitle: string,
};

/**
 * Renders a recent transaction entry for the masternodes manager.
 *
 * @param { String } Object.transactionAmount  - Transaction amount for this entry.
 * @param { String } Object.transactionDate    - Date of transaction (dd/mm/yy) for this entry.
 * @param { String } Object.transactionDate    - Time of transaction (hh:ss) for this entry.
 * @param { String } Object.transactionDate    - Transaction title.
 *
 * @returns {React.ReactNode}
 */
const recentTransactionItem:React.SFC<recentTransactionItemProps> = ({
  transactionAmount,
  transactionDate,
  transactionTime,
  transactionTitle,
}) => {
  return (
    <Flex width={1}>
      <Box width={1}>
        <Flex
          mb={3}
          width={1}
        >
          <CapsText
            fontSize={2}
            width={0.5}
          >
            {transactionTitle}
          </CapsText>

          <CapsText
            fontSize={2}
            textAlign={'right'}
            width={0.5}
          >
            + {transactionAmount} Stone
          </CapsText>
        </Flex>
        <Text
          color={'coolgray'}
          fontSize={2}
        >
          {transactionDate} at {transactionTime}
        </Text>
      </Box>
    </Flex>
  );
};

export default recentTransactionItem;
