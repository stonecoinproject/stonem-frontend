import * as React from 'react';
import styledComponents from 'styled-components';
import {
    Box,
    Flex,
    Text,
} from 'rebass';
import { FilterButton } from './index';
type filterCriteriaProps = {
  isSelected: boolean;
  name: string;
};

type filterCriteriaBarProps = {
  filterCriteria: filterCriteriaProps[];
};

const filterCriteriaBar = ({ filterCriteria }:filterCriteriaBarProps) => (
    <Flex mr={3}>
    {filterCriteria.map((
      filter:filterCriteriaProps,
      key:number,
      ) => (
        <Box
          mr={2}
          key={key}
        >
          <FilterButton isSelected={filter.isSelected}>
            <Text fontSize={0}>{filter.name}</Text>
          </FilterButton>
        </Box>
      ),
    )}
    </Flex>
  );
export default filterCriteriaBar;
