import * as React from 'react';
import {
  Box,
  Text,
  SpaceProps,
} from 'rebass';
import { theme } from '../../config';
import {
  CapsText,
  DisplayCard,
} from '../UI';

type walletManagerBalanceCardProps = SpaceProps<any> & {
  /** Title for the balance card shown.  */
  title: string,
  /** Amount on the balance card shown.  */
  amount: number,
  /** CSS styling. */
  style?: React.CSSProperties,
  props?: any,
};

/**
 * Displays an image and a caption.
 *
 * @param   { String }  title   - Title of the balance card shown.
 * @param   { String }  amount  - Amount on the balance card shown.
 *
 * @returns { React.ReactNode }
 */
const walletManagerBalanceCard: React.SFC<walletManagerBalanceCardProps> = ({
  title,
  amount,
  ...props
}) => {

  return (
    <DisplayCard
      borderWidth={'2px'}
      style={{
        paddingBottom: `${theme.space[4]}px`,
      }}
      px={0}
      py={0}
      {...props}
    >
      <Box
        mb={4}
        mt={3}
      >
        <CapsText
          fontSize={2}
          fontWeight={'600'}
          textAlign={'center'}
        >
          {title}
        </CapsText>
      </Box>
      <Text
        color={theme.colors.placeholdergray}
        fontSize={5}
        fontWeight={'500'}
        mb={2}
        textAlign={'center'}
      >
        {amount.toFixed(2)}
      </Text>
      <CapsText
        color={theme.colors.placeholdergray}
        textAlign={'center'}
      >
        Stone
      </CapsText>
    </DisplayCard>
  );
};

walletManagerBalanceCard.defaultProps = {};

export default walletManagerBalanceCard;
