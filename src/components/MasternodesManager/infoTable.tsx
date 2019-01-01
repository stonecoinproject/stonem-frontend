import * as React from 'react';
import {
  Box,
  Flex,
} from 'rebass';

import {
  MasternodesManagerSwitch,
  MasternodesManagerSponsor,
  MasternodesManagerWalletVersion,
  MasternodesManagerVPSVersion,
} from '.';

/**
 * Renders info about the masternode in a tidy, little table.
 *
 * @returns {React.Reactnode}
 */
const infoTable = () => {
  return (
    <Flex justifyContent={'center'}>
      <Box width={9 / 10}>
        <Flex>
          <MasternodesManagerSwitch />
          <MasternodesManagerSponsor />
        </Flex>

        <Flex>
          <MasternodesManagerVPSVersion />
          <MasternodesManagerWalletVersion />
        </Flex>
      </Box>
    </Flex>
  );
};

export default infoTable;
