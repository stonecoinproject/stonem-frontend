import React from 'react';
import {
    Box,
    Flex,
    Image,
} from 'rebass';

const FilterLayoutSwitcher = () => (
    <Flex flexDirection={'column'} justifyContent={'center'}>
      <Flex>
        <Box mr={3}>
          <Image src={require('../Home/cards.svg')}/>
        </Box>
        <Box>
          <Image src={require('../Home/list.svg')}/>
        </Box>
      </Flex>
    </Flex>
);

export default FilterLayoutSwitcher;
