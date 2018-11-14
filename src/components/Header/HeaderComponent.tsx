import React from 'react';
import {
    Box,
    Flex,
    Image,
    Heading,
    Text,
} from 'rebass';
import { app, theme } from '../../config';

interface HeaderComponentStyles {
  HeaderComponentContainer: object;
  HeaderComponentWrapper: object;
  HeaderComponentInfoContainer: object;
}

const styles:HeaderComponentStyles = {
  HeaderComponentContainer: {
    background: theme.colors.lightergray,
    height: theme.Header.height,
  },
  HeaderComponentWrapper: { height: '100%' },
  HeaderComponentInfoContainer: { width: '82%' },
};

const HeaderComponent = () => (
  <Box css={styles.HeaderComponentContainer}>
    <Flex
      css={styles.HeaderComponentWrapper}
      flexDirection="column"
      justifyContent="center"
      px={4}
    >
      <Flex>

        <Box>
            <Heading
              fontWeight={'normal'}
              fontSize={5}
            >
              {app.name}
            </Heading>
            <Text fontSize={1}>{app.tagline}</Text>
        </Box> {/* End Header brand section */}

        <Flex
          flexDirection="row-reverse"
          css={styles.HeaderComponentInfoContainer}
        >
          <Flex ml={4}>
            <Image
                src={require('../Header/login-icon.svg')}
              />
          </Flex>

          <Flex>
            <Box pt={2} mr={3}>
              <Text fontSize={1} textAlign="center">Available MNs</Text>
              <Text fontSize={4} textAlign="center">200</Text>
            </Box>

            <Box pt={2} mr={3}>
              <Text fontSize={1} textAlign="center">Active MNs</Text>
              <Text fontSize={4} textAlign="center">1k</Text>
            </Box>

            <Box pt={2}>
              <Text fontSize={1} textAlign="center">Hosted Value</Text>
              <Text fontSize={4} textAlign="center">$2m</Text>
            </Box>
          </Flex> {/* End header info display */}
        </Flex>

      </Flex>
    </Flex>
  </Box>
);

export default HeaderComponent;
