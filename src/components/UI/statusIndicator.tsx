import * as React from 'react';
import {
  Flex,
} from 'rebass';

import {
  CapsText,
  Dot,
} from '../UI';
import { theme } from '../../config';
import { StatusIndicatorProps } from '../../config/types';

/**
 * Creates status text next to a dot indicator.
 *
 * @param {String} indicatorBg         - Background color of the indicator dot.
 * @param {String} indicatorHighlight  - Border color of the indicator dot.
 * @param {String} statusText          - Text accompanying the indicator dot.
 *
 * @returns {React.ReactNode}
 */
const statusIndicator:React.SFC<StatusIndicatorProps> = ({
  indicatorBg,
  indicatorHighlight,
  statusText,
  statusTextColor,
}) => {
  return (
    <Flex>
      <Flex
        flexDirection={'column'}
        justifyContent={'center'}
      >
        <Dot
          bg={theme.colors[indicatorBg]}
          style={{
            border: `1px solid ${indicatorHighlight}`,
          }}
        />
      </Flex>
      <CapsText
        color={statusTextColor}
        fontSize={0}
        ml={2}
      >
        {statusText}
      </CapsText>
    </Flex>
  );
};

statusIndicator.defaultProps = {
  indicatorBg: 'lightblue',
  indicatorHighlight: theme.colors.blue,
  statusTextColor: theme.colors.placeholdergray,
};

export default statusIndicator;
