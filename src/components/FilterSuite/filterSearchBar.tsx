import * as React from 'react';
import { Flex } from 'rebass';
import { Input } from '../UI';

const filterSearchBar = () => {
  return (
        <Flex
          flexDirection={'column'}
          mr={3}
          width={1}
        >
          <Input
            data-testid={'filter-search-input'}
            placeholder={'Search Masternode'}
            theme={{
              size: 2,
            }}
            />
        </Flex>
  );
};

export default filterSearchBar;
