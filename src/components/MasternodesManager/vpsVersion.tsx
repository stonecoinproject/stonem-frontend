import * as React from 'react';
import {
  Box,
  Text,
} from 'rebass';

import { styles } from '../../config';

/**
 * Renders masternode VPS version info.
 *
 * @returns {React.ReactNode}
 */
const vpsVersion = () => {
  return (
    <Box
      style={styles.masternodesManagerInfoSection}
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
        <Text
          color={'copywritegray'}
          fontSize={4}
        >
          V 2.1.0.1
        </Text>
      </Box>

    </Box>
  );
};

export default vpsVersion;
