import * as React from 'react';
import { Flex } from 'rebass';

import { CapsText } from '../UI';

/**
 * Renders the top bar for the component.
 *
 * @returns React.ReactNode
 */
const topBar = () => (
  <Flex
    flexDirection={'column'}
    py={3}
  >
    <CapsText
      color={'darkergray'}
      fontSize={0}
    >
      Your MasterNodes
    </CapsText>
  </Flex>
);

export default topBar;
