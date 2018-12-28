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
} from '../MasternodesManager';

/**
 * Renders info about the masternode in a tidy, little table.
 *
 * @returns {React.Reactnode}
 */
const masternodesManagerInfoTable = () => {
  return (
    <Flex justifyContent={'center'}>
      <Box width={9 / 10}>
        <Flex>
          <MasternodesManagerSwitch />
          <MasternodesManagerSponsor />
        </Flex>
        <Flex>
          <MasternodesManagerWalletVersion />
          <MasternodesManagerVPSVersion />
        </Flex>
      </Box>
    </Flex>
  );
};

export default masternodesManagerInfoTable;
