import * as React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
} from 'rebass';
import { LoginIcon } from '../../components/Icons';

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
    position: 'fixed',
    top: 0,
    width: `calc(100% - ${theme.Sidebar.width}px)`,
    zIndex: theme.Header.zIndex,
  },
  HeaderComponentWrapper: { height: '100%' },
  HeaderComponentInfoContainer: { width: '80%' },
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
          <Flex
            ml={4}
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <LoginIcon />
          </Flex>

          <Flex>
            <Box pt={2} mr={3}>
              <Text fontSize={1} textAlign="center">Available MNs</Text>
              <Text fontSize={3} textAlign="center">200</Text>
            </Box>

            <Box pt={2} mr={3}>
              <Text fontSize={1} textAlign="center">Active MNs</Text>
              <Text fontSize={3} textAlign="center">1k</Text>
            </Box>

            <Box pt={2}>
              <Text fontSize={1} textAlign="center">Hosted Value</Text>
              <Text fontSize={3} textAlign="center">$2m</Text>
            </Box>
          </Flex> {/* End header info display */}
        </Flex>

      </Flex>
    </Flex>
  </Box>
);

export default HeaderComponent;
