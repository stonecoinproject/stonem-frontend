import * as React from 'react';
import {
  Box,
  Flex,
} from 'rebass';

import { DisplayCard } from '../UI';

/**
 * Renders the coin merchants.
 *
 * @returns {React.ReactNode}
 */
const mnManagerCoinMerchants = ({ ...props }) => (
  <Flex
    mb={3}
    pt={2}
    pb={3}
    {...props}
  >
    <Box
      mr={1}
      width={1 / 6}
    >
      <DisplayCard
        displayCaption={'Stone'}
        displayPhoto={'stone-logo.png'}
        isHighlighted
      />
    </Box>
    <Box
      mr={1}
      width={1 / 6}
    >
      <DisplayCard
        displayCaption={'TRC'}
        displayPhoto={'terracoin-logo.png'}
      />
    </Box>
  </Flex>
);

export default mnManagerCoinMerchants;
