import React from 'react';
import { Flex } from 'rebass';
import { Input } from '../../components/UI';

const FilterSearchBar = () => {
  return (
        <Flex mr={4}>
            <Input placeholder={'Search Masternode'} />
        </Flex>
  );
};

export default FilterSearchBar;