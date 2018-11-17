import * as React from 'react';
import {
    Box,
    Flex,
    Image,
} from 'rebass';

const FilterLayoutSwitcher = () => (
    <Flex flexDirection={'column'} justifyContent={'center'}>
      <Flex>
        <Box mr={3}>
          <Image src={require('./cards.svg')}/>
        </Box>
        <Box>
          <Image src={require('./list.svg')}/>
        </Box>
      </Flex>
    </Flex>
);

export default FilterLayoutSwitcher;
