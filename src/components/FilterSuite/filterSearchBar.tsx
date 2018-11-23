import * as React from 'react';
import { Flex } from 'rebass';
import { Input } from '../UI';

const filterSearchBar = () => {
  return (
        <Flex mr={3}>
            <Input placeholder={'Search Masternode'} />
        </Flex>
  );
};

export default filterSearchBar;
