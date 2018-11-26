import * as React from 'react';
import styledComponents from 'styled-components';
import {
    Box,
    Flex,
    Text,
} from 'rebass';
import { FilterButton } from './index';

interface filterCriteriaItemInterface {
  isSelected: boolean;
  name: string;
}

export interface FilterCriteriaInterface {
  filterCriteria: Array<filterCriteriaItemInterface>;
}
const filterCriteriaBar = ({ filterCriteria }:any) => (
    <Flex mr={3}>
    {filterCriteria.map((filter:filterCriteriaItemInterface, key:number) => (
      <Box
        mr={2}
        key={key}
      >
        <FilterButton isSelected={filter.isSelected}>
          <Text fontSize={0}>{filter.name}</Text>
        </FilterButton>
      </Box>
    ))}
    </Flex>
  );
export default filterCriteriaBar;
