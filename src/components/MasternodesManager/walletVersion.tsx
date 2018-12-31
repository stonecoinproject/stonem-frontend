import * as React from 'react';
import {
  Box,
  Text,
} from 'rebass';

import { CapsText } from '../UI';

/**
 * Renders masternode wallet version info.
 *
 * @returns {React.ReactNode}
 */
const walletVersion = () => {
  return (
    <Box
      pt={3}
      pb={4}
      width={1 / 2}
    >
      <Text
        color={'coolgray'}
        mb={3}
        pr={5}
        textAlign={'right'}
      >
        Wallet Version
      </Text>

      <Box mr={5}>
        <CapsText
          color={'copywritegray'}
          textAlign={'right'}
          fontSize={4}
        >
          v 2.1.0.1
        </CapsText>
      </Box>

    </Box>
  );
};

export default walletVersion;
