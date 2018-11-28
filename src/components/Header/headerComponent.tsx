import * as React from 'react';
import {
    Box,
    Flex,
    Heading,
    Text,
} from 'rebass';
import { LoginIcon } from '../Icons';
import {
  app,
  theme,
} from '../../config';
import { PortfolioStat } from '../PortfolioStatsSuite';

interface HeaderComponentStyles {
  headerComponentContainer: object;
  headerComponentWrapper: object;
  headerComponentInfoContainer: object;
}

const styles:HeaderComponentStyles = {
  headerComponentContainer: {
    background: theme.colors.lightergray,
    height: theme.Header.height,
    position: 'fixed',
    top: 0,
    width: `calc(100% - ${theme.Sidebar.width}px)`,
    zIndex: theme.Header.zIndex,
  },
  headerComponentWrapper: { height: '100%' },
  headerComponentInfoContainer: { width: '80%' },
};

const headerComponent = () => (
  <Box css={styles.headerComponentContainer}>
    <Flex
      css={styles.headerComponentWrapper}
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
          css={styles.headerComponentInfoContainer}
        >
          <Flex
            ml={4}
            flexDirection={'column'}
            justifyContent={'center'}
          >
            <LoginIcon />
          </Flex>

          <Flex>
            <PortfolioStat
              label={'Available MNs'}
              value={'200'}
              pt={2}
              mr={3}
            />

            <PortfolioStat
              label={'Active MNs'}
              value={'1k'}
              pt={2}
              mr={3}
            />

            <PortfolioStat
              label={'Hosted Value'}
              value={'$2m'}
              pt={2}
            />

          </Flex> {/* End header info display */}
        </Flex>

      </Flex>
    </Flex>
  </Box>
);

export default headerComponent;
