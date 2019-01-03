import * as React from 'react';
import {
  Button,
  Box,
  Text,
} from 'rebass';

import { StatusIndicator } from '../UI';
import { theme } from '../../config';

const styles = {
  masternodeSwitchStyles: {
    borderBottom: `1px solid ${theme.colors.gray}`,
    borderRight: `1px solid ${theme.colors.gray}`,
  },
};

/**
 * Renders the switch control for the masternodes switch.
 *
 * @returns {React.ReactNode}
 */
const renderSwitchControl = () => (
  <Box>
    <Box
      ml={3}
      mb={3}
    >
      <StatusIndicator
        indicatorBg={'lightgreen'}
        indicatorHighlight={theme.colors.green}
        statusText={'Enabled'}
        statusTextColor={'placeholdergray'}
      />
    </Box>
    <Button variant={'warning'}>
      <Text fontWeight={'normal'}>Switch OFF</Text>
    </Button>
  </Box>
);

/**
 * Renders a masternode switch board with indicator status.
 *
 * @returns {React.ReactNode}
 */
const masternodeSwitch = () => {
  return (
    <Box
      pt={3}
      pb={4}
      style={styles.masternodeSwitchStyles}
      width={1 / 2}
    >
      <Text
        color={'coolgray'}
        mb={3}
        pl={4}
      >
        Status
      </Text>

      {renderSwitchControl()}
    </Box>
  );
};

export default masternodeSwitch;
