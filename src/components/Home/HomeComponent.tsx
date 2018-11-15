import React from 'react';
import {
  Button,
  Box,
  Image,
  Flex,
  Text,
} from 'rebass';
import styled from 'styled-components';

import FilterButton from './FilterButton';
import FilterLayoutSwitcher from './FilterLayoutSwitcher';
import FilterCriteriaBar from './FilterCriteriaBar';
import FilterCriteriaHeading from './FilterCriteriaHeading';
import FilterSearchBar from './FilterSearchBar';

import { theme, app } from '../../config';

interface HomeComponentStyles {
  HomeComponentContainer: object;
  HomeComponentFiltersContainer: object;
}

const styles:HomeComponentStyles = {
  HomeComponentContainer: {
    height: '95%',
  },
  HomeComponentFiltersContainer: {
    borderBottom: `1px solid ${theme.colors.lightgray}`,
  },
};

const HomeComponent = () => (
  <Box
    bg={'white'}
    mx={5}
    my={4}
    px={4}
    css={styles.HomeComponentContainer}
  >
    <Box
      pb={3}
      css={styles.HomeComponentFiltersContainer}
    >
      <FilterCriteriaHeading />
      <Flex>
        <FilterCriteriaBar filterCriteria={app.filterCriteria}/>
        <FilterSearchBar/>
        <FilterLayoutSwitcher/>
      </Flex>
    </Box>
  </Box>
);

export default HomeComponent;