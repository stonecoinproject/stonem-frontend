import * as React from 'react';
import {
    Box,
    Flex,
} from 'rebass';
import {
  ListIcon,
  CardsIcon,
} from '../Icons';

const filterLayoutSwitcher = () => (
    <Flex
      flexDirection={'column'}
      justifyContent={'center'}
    >
      <Flex>
        <Box
          data-testid={'switcher-icon'}
          mr={3}
        >
          <CardsIcon />
        </Box>
        <Box data-testid={'switcher-icon'}>
          <ListIcon />
        </Box>
      </Flex>
    </Flex>
);

export default filterLayoutSwitcher;
