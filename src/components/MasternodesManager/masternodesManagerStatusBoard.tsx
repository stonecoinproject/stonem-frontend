import * as React from 'react';
import {
  Box,
  Flex,
} from 'rebass';
import { MnManagerStatusCard } from '../MnManagerSuite';

/**
 * Renders the masternodes status board.
 *
 * @returns {React.ReactNode}
 */
const masternodesStatusBoard = ({ ...props }) => {
  return (
    <Box
      pt={2}
      pb={3}
      {...props}
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

        <Box
          mr={1}
          width={1 / 3}
        >
          <MnManagerStatusCard
            isHighlighted={false}
            mnLastRenewalDate={'21/07/2018'}
            mnLastRenewalTime={'05:33'}
            mnStatusCode={'off'}
            mnTitle={'MN 5'}
          />
        </Box>
      </Flex>

    </Box>
  );
};

export default masternodesStatusBoard;
