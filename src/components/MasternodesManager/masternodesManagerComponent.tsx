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
  DisplayCard,
  ProgressBar,
} from '../UI';

import { MnManagerStatusCard } from '../MnManagerSuite';

import { theme } from '../../config';

interface ComponentStyles {
  ComponentContainer: React.CSSProperties;
  ComponentFiltersContainer: React.CSSProperties;
  CoinMerchantsContainer: React.CSSProperties;
  MasternodesStatusBoardContainer: React.CSSProperties;
}

const styles:ComponentStyles = {
  ComponentContainer: {
    height: '95%',
    borderRadius: theme.radiusSizes[1],
  },
  ComponentFiltersContainer: {
  },
  CoinMerchantsContainer: {
    borderBottom: `2px solid ${theme.colors.gray}`,
  },
  MasternodesStatusBoardContainer: {},
};

/**
 * Renders the top bar for the component.
 *
 * @returns React.ReactNode
 */
const renderTopBar = () => (
  <Box
    py={3}
    style={styles.ComponentFiltersContainer}
  >
    <CapsText
      color={'darkergray'}
      fontSize={0}
    >
      Your MasterNodes
    </CapsText>
  </Box>
);

/**
 * Renders the coin merchants.
 *
 * @returns {React.ReactNode}
 */
const renderCoinMerchants = () => (
  <Flex
    mb={3}
    pt={2}
    pb={3}
    style={styles.CoinMerchantsContainer}
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

/**
 * Renders the masternodes status board.
 *
 * @returns {React.ReactNode}
 */
const renderMasternodesStatusBoard = () => {
  return (
    <Box
      pt={2}
      pb={3}
      style={styles.MasternodesStatusBoardContainer}
    >
      <Flex mb={3}>
        <Box
          mr={1}
          width={1 / 3}
        >
          <MnManagerStatusCard
            isHighlighted
            mnLastRenewalDate={'21/07/2018'}
            mnLastRenewalTime={'05:33'}
            mnStatusCode={'enabled'}
            mnTitle={'MN 1'}
          />
        </Box>

        <Box
          mr={1}
          width={1 / 3}
        >
          <MnManagerStatusCard
            isHighlighted={false}
            mnLastRenewalDate={'21/07/2018'}
            mnLastRenewalTime={'05:33'}
            mnStatusCode={'enabled'}
            mnTitle={'MN 2'}
          />
        </Box>

        <Box
          mr={1}
          width={1 / 3}
        >
          <MnManagerStatusCard
            isHighlighted={false}
            mnLastRenewalDate={'21/07/2018'}
            mnLastRenewalTime={'05:33'}
            mnStatusCode={'restart-required'}
            mnTitle={'MN 3'}
          />
        </Box>

      </Flex>

      <Flex>
        <Box
          mr={1}
          width={1 / 3}
        >
          <MnManagerStatusCard
            isHighlighted={false}
            mnLastRenewalDate={'21/07/2018'}
            mnLastRenewalTime={'05:33'}
            mnStatusCode={'off'}
            mnTitle={'MN 4'}
          />
        </Box>
      </Flex>

    </Box>
  );
};

/**
 * Renders the uptime stats for the masternode.
 *
 * @returns {React.ReactNode}
 */
const renderMasternodeUptimeStats = () => {
  return (
    <Flex>
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

        <Text
          color={'coolgray'}
          textAlign={'right'}
        >
          IP:
        </Text>
      </Box>

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
        <Text color={'copywritegray'}>109.121.209.121:6253</Text>
      </Box>
    </Flex>
  );
};

/**
 * Renders the masternodes manager.
 *
 * @returns {React.ReactNode}
 */
const masternodesManagerComponent = () => {
  return (
    <Flex width={1}>
      <Box
        bg={'white'}
        ml={4}
        mr={2}
        my={4}
        px={4}
        pb={4}
        style={styles.ComponentContainer}
        width={6 / 10}
      >
        {renderTopBar()}
        {renderCoinMerchants()}
        {renderMasternodesStatusBoard()}
      </Box>
      <Box
        bg={'white'}
        my={4}
        mx={2}
        px={3}
        py={2}
        style={styles.ComponentContainer}
        width={4 / 10}
      >
        <Flex py={2}>
          {renderMasternodeUptimeStats()}
        </Flex>
      </Box>
    </Flex>
  );
};

export default masternodesManagerComponent;
