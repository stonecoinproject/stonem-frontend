import * as React from 'react';
import {
  Box,
  Flex,
} from 'rebass';
import { MnManagerStatusCard } from '../MnManagerSuite';

/**
 * Wraps the status item cards.
 *
 * @param {React.ReactNode} children -  React children element.
 */
// tslint:disable-next-line:variable-name
const StatusItemContainer:React.SFC = ({ children }) => (
  <Box
    mr={1}
    width={1 / 3}
  >
    {children}
  </Box>
);

/**
 * Renders the first row of status cards.
 *
 * @returns {React.ReactNode}
 */
const renderFirstRow = ():React.ReactNode => (
  <Flex mb={3}>
    <StatusItemContainer>
      <MnManagerStatusCard
        isHighlighted
        mnLastRenewalDate={'21/07/2018'}
        mnLastRenewalTime={'05:33'}
        mnStatusCode={'enabled'}
        mnTitle={'MN 1'}
      />
    </StatusItemContainer>

    <StatusItemContainer>
      <MnManagerStatusCard
        isHighlighted={false}
        mnLastRenewalDate={'21/07/2018'}
        mnLastRenewalTime={'05:33'}
        mnStatusCode={'enabled'}
        mnTitle={'MN 2'}
      />
    </StatusItemContainer>

    <StatusItemContainer>
      <MnManagerStatusCard
        isHighlighted={false}
        mnLastRenewalDate={'21/07/2018'}
        mnLastRenewalTime={'05:33'}
        mnStatusCode={'restart-required'}
        mnTitle={'MN 3'}
      />
    </StatusItemContainer>
  </Flex>
);

/**
 * Renders the second row of status cards.
 *
 * @returns {React.ReactNode}
 */
const renderSecondRow = ():React.ReactNode => (
  <Flex>
    <StatusItemContainer>
      <MnManagerStatusCard
        isHighlighted={false}
        mnLastRenewalDate={'21/07/2018'}
        mnLastRenewalTime={'05:33'}
        mnStatusCode={'off'}
        mnTitle={'MN 4'}
      />
    </StatusItemContainer>

    <StatusItemContainer>
      <MnManagerStatusCard
        isHighlighted={false}
        mnLastRenewalDate={'21/07/2018'}
        mnLastRenewalTime={'05:33'}
        mnStatusCode={'off'}
        mnTitle={'MN 5'}
      />
    </StatusItemContainer>
  </Flex>
);

/**
 * Renders the masternodes status board.
 *
 * @returns {React.ReactNode}
 */
const statusBoard = ({ ...props }) => {
  return (
    <Box
      pt={2}
      pb={3}
      {...props}
    >
      {renderFirstRow()}
      {renderSecondRow()}
    </Box>
  );
};

export default statusBoard;
