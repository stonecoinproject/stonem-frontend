import * as React from 'react';
import {
  Box,
  Text,
} from 'rebass';

import { CapsText } from '../UI';
import { theme } from '../../config';

/**
 * Renders masternode VPS version info.
 *
 * @returns {React.ReactNode}
 */
const vpsVersion = () => {
  return (
    <Box
      pt={3}
      pb={4}
      style={{
        borderRight: `1px solid ${theme.colors.gray}`,
      }}
      width={1 / 2}
    >
      <Text
        color={'coolgray'}
        mb={3}
        pl={4}
      >
        VPS Version
      </Text>

      <Box ml={4}>
        <CapsText
          color={'copywritegray'}
          fontSize={4}
        >
          v 2.1.0.1
        </CapsText>
      </Box>

    </Box>
  );
};

export default vpsVersion;
