import * as React from 'react';
import {
  Box,
  Image,
  Text,
} from 'rebass';

import { DeadCentered } from '../UI';
import { theme } from '../../config';

/**
 * Renders masternode sponsor info.
 *
 * @returns {React.ReactNode}
 */
const sponsor = () => {
  return (
    <Box
      pt={3}
      pb={4}
      style={{
        borderBottom: `1px solid ${theme.colors.gray}`,
      }}
      width={1 / 2}
    >
      <Text
        color={'coolgray'}
        mb={3}
        pr={5}
        textAlign={'right'}
      >
        Powered By
      </Text>

      <DeadCentered>
        <Image
          src={require('../IncomeStatsSuite/logo-copy.png')}
        />
      </DeadCentered>

    </Box>
  );
};

export default sponsor;
