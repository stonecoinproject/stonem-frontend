import React from 'react';
import {
  Box,
  Text,
} from 'rebass';

interface HomeComponentStyles {
  HomeComponentContainer: object;
}

const styles:HomeComponentStyles = {
  HomeComponentContainer: {
    height: '95%',
  },
};

const HomeComponent = () => (
  <Box
    bg={'white'}
    mx={4}
    my={4}
    css={styles.HomeComponentContainer}
  >
      <Text>&nbsp;</Text>
  </Box>
);

export default HomeComponent;
