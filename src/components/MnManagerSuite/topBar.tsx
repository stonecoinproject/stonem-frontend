import * as React from 'react';
import { Flex } from 'rebass';

import { CapsText } from '../UI';

type topBarProps = {
  title: string,
};

/**
 * Renders the top bar for the component.
 *
 * @param {String} Object.title - Title on the top bar.
 *
 * @returns React.ReactNode
 */
const topBar:React.SFC<topBarProps> = ({ title }) => (
  <Flex
    flexDirection={'column'}
    py={3}
  >
    <CapsText
      color={'darkergray'}
      fontSize={0}
    >
      {title}
    </CapsText>
  </Flex>
);

export default topBar;
