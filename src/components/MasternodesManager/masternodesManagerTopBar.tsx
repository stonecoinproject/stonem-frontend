import * as React from 'react';
import { Box } from 'rebass';

import { CapsText } from '../UI';

/**
 * Renders the top bar for the component.
 *
 * @returns React.ReactNode
 */
const masternodeManagerTopBar = () => (
  <Box py={3}>
    <CapsText
      color={'darkergray'}
      fontSize={0}
    >
      Your MasterNodes
    </CapsText>
  </Box>
);

export default masternodeManagerTopBar;
