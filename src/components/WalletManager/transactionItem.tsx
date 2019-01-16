import * as React from 'react';
import {
  Box,
  Card,
  CardProps,
  Flex,
  Image,
} from 'rebass';

import ToggleProvider from '../../providers/ToggleProvider';
import { CapsText } from '../UI';
import { theme } from '../../config';

type transactionItemProps = CardProps & {
  /** Amount the transaction cost. */
  amount: string,
  /** A string representing the file name of the transaction vendor brand. */
  brand: string,
  /** Date the transaction was initiated. */
  date: string,
  /** Does this transaction amount possess a negative sign. */
  hasNegativeIndex?: boolean,
  /** The title assigned to this transaction. */
  title: string,
  /** Time the transaction was initiated. */
  time: string,
};

/**
 * Displays information about a masternode transaction.
 *
 * @param {String} props.amount            -  Amount the transaction cost.
 * @param {String} props.brand             -  A string representing the file name of the transaction vendor brand.
 * @param {String} props.date              -  Date the transaction was initiated.
 * @param {String} props.hasNegativeIndex  -  Does this transaction amount possess a negative sign.
 * @param {String} props.title             -  The title assigned to this transaction.
 * @param {String} props.time              -  Time the transaction was initiated.
 *
 * @returns {React.ReactNode}
 */
const transactionItem:React.SFC<transactionItemProps> = (props) => {
  const {
    amount,
    brand,
    children,
    date,
    hasNegativeIndex,
    title,
    time,
  } = props;

  return (
    <ToggleProvider
      render={({
        isOn,
        doToggle,
      }) => (
      <Card
        border={2}
        borderColor={ isOn ? theme.colors.blue : theme.colors.bordergray}
        borderRadius={theme.radiusSizes[1]}
        p={3}
        onClick={doToggle}
        style={{
          cursor: 'pointer',
        }}
        {...props}
      >
        <Flex>
          <Box
            mr={3}
            width={1 / 5}
          >
            <Image width={1} src={brand} />
          </Box>

          <Box width={1}>
            <Box width={1}>
              <Flex width={1}>
                <CapsText
                  fontSize={3}
                  mb={3}
                  width={1 / 2}
                >
                  {title}
                </CapsText>

                <CapsText
                  fontSize={3}
                  mb={3}
                  textAlign={'right'}
                  width={1 / 2}
                >
                  {time}
                </CapsText>
              </Flex>

              <Flex width={1}>
                <CapsText
                  color={hasNegativeIndex ? 'red' : 'placeholdergray'}
                  fontSize={3}
                  mb={2}
                  width={1 / 2}
                >
                  {amount}
                </CapsText>

                <CapsText
                  color={'placeholdergray'}
                  fontSize={3}
                  mb={2}
                  textAlign={'right'}
                  width={1 / 2}
                >
                  {date}
                </CapsText>
              </Flex>
            </Box>
          </Box>
        </Flex>

        <Box style={{
          height: isOn ? 'auto' : '0',
          overflowY: 'hidden',
        }}>
          {children}
        </Box>
      </Card>
    )} />
  );
};

transactionItem.defaultProps = {
  hasNegativeIndex: false,
};

export default transactionItem;
