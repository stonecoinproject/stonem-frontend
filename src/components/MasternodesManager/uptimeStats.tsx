import * as React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
} from 'rebass';

import {
  CapsText,
  DeadCentered,
  ProgressBar,
} from '../UI';
import { theme } from '../../config';

/**
 * Renders the Stone brand.
 *
 * @returns {React.ReactNode}
 */
const renderBrand = ():React.ReactNode => (
  <Box
    mr={4}
    width={1 / 4}
  >
    <Box
      bg={'skyblue'}
      mb={3}
      p={2}
      style={{
        borderRadius: theme.radiusSizes[1],
      }}
      width={1}
    >
      <DeadCentered>
        <Image src={require('../IncomeStatsSuite/stone-logo.png')} />
      </DeadCentered>
    </Box>
  </Box>
);

/**
 * Renders the Stone brand.
 *
 * @returns {React.ReactNode}
 */
const renderUptimeStatsProgress = ():React.ReactNode => (
  <Box width={1}>
    <CapsText
      fontSize={5}
      mb={2}
      style={{
        /** Account for differences in font heights (please forgive me!). */
        marginTop: '-5px',
      }}
    >
      Mn 1
    </CapsText>
    <ProgressBar
      theme={{
        indicatorWidth: '50%',
      }}
      width={8 / 10}
      mb={3}
    />
    <Text
      color={'subemphasisedgray'}
      fontSize={0}
      fontWeight={'600'}
      mb={3}
    >
      Active: 3d:02h:05m:06s
    </Text>
  </Box>
);

/**
 * Renders the I.P information of the masternode.
 *
 * @returns {React.ReactNode}
 */
const renderIPInfo = ():React.ReactNode => (
  <Flex>
    <Text
      color={'coolgray'}
      textAlign={'right'}
      width={1 / 5}
    >
      IP:
    </Text>

    <Text
      color={'coolgray'}
      ml={3}
      pl={2}
    >
      66.66.66.666:666333
    </Text>
  </Flex>
);

/**
 * Renders the uptime stats for the masternode.
 *
 * @returns {React.ReactNode}
 */
const uptimeStats = () => {
  return (
    <Box mb={4}>
      <Flex>
        {renderBrand()}
        {renderUptimeStatsProgress()}
      </Flex>

      {renderIPInfo()}
    </Box>
  );
};

export default uptimeStats;
