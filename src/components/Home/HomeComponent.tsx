import React from 'react';
import {
  Button,
  Box,
  Image,
  Flex,
  Text,
} from 'rebass';
import styled from 'styled-components';
import { theme, app } from '../../config';
import { Input } from '../../components/UI';

interface HomeComponentStyles {
  HomeComponentContainer: object;
}

const styles:HomeComponentStyles = {
  HomeComponentContainer: {
    height: '95%',
  },
};

const CapsText = styled(Text)`
  text-transform: uppercase
`;

const Dot = styled(Box)`
  width: 10px;
  height: 10px;
  background: ${theme.colors.blue};
  border-radius: 9999px;
`;

const FilterButton = ({ isSelected, children }:any) => (
  <Button
    px={3}
    variant={'default'}
  >
    {isSelected && 
      <Dot
        css={{
          position: 'absolute',
          top: 3,
          right: 3,
        }}
      />
    }
    {children}
  </Button>
);

const FilterSearchBar = () => (
  <Flex mr={3}>
    <Input placeholder={'Search Masternode'} />
  </Flex>
);

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

const FilterCriteriaBar = () => (
  <Flex mr={3}>
  {app.filterCriteria.map((filter, key) => (
    <Box
      mr={1}
      key={key}
    >
      <FilterButton isSelected={filter.isSelected}>
        <Text fontSize={1}>{filter.name}</Text>
      </FilterButton>
    </Box>
  ))}
  </Flex>
);

const HomeComponent = () => (
  <Box
    bg={'white'}
    mx={5}
    my={4}
    px={4}
    css={styles.HomeComponentContainer}
  >
    <Box>
      <Flex>
        <CapsText width={0.3} fontSize={1} py={3}>Filters (3/3)</CapsText>
        <Flex width={0.7} flexDirection={'row-reverse'}>
          <CapsText fontSize={1} py={3}>Layout</CapsText>
        </Flex>
      </Flex>

      <Flex>
        <FilterCriteriaBar/>
        <FilterSearchBar/>
        <FilterLayoutSwitcher/>
      </Flex>

    </Box>
  </Box>
);

export default HomeComponent;
