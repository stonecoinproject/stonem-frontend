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

/**
 * Renders the brand artwork.
 *
 * @param {String} brand  - Source of brand artwork.
 *
 * @returns {React.ReactNode}
 */
const renderBrand = (
  brand: string,
) => {
  return (
    <Box
      mr={3}
      width={1 / 5}
    >
      <Image width={1} src={brand} />
    </Box>
  );
};

/**
 * Renders the transaction heading.
 *
 * @param {String} title  - Transaction title.
 * @param {String} time  - Transaction time.
 *
 * @returns {React.ReactNode}
 */
const renderHeading = (
  title: string,
  time: string,
) => {
  return (
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
  );
};

/**
 * Renders meta information.
 *
 * @param amount {String}
 * @param date {String}
 * @param hasNegativeIndex {String}
 */
const renderMetaInformation = (
  amount: string,
  date: string,
  hasNegativeIndex: boolean,
) => {
  return (
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
  );
};

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
  return (
    <ToggleProvider
      render={({ isOn, doToggle }) => (
      <Card
        border={2}
        borderColor={ isOn ? theme.colors.blue : theme.colors.bordergray}
        borderRadius={theme.radiusSizes[1]}
        p={3}
        onClick={doToggle}
        style={{ cursor: 'pointer' }}
        {...props}
      >
        <Flex>
          {renderBrand(props.brand)}
          <Box width={1}>
            {renderHeading(props.title, props.time)}
            {renderMetaInformation(props.amount, props.date, props.hasNegativeIndex)}
          </Box>
        </Flex>
        <Box style={{
          height: isOn ? 'auto' : '0',
          overflowY: 'hidden',
        }}>{props.children}</Box>
      </Card>
    )} />
  );
};

transactionItem.defaultProps = {
  hasNegativeIndex: false,
};

export default transactionItem;
