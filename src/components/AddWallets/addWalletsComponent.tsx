import * as React from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Card,
} from 'rebass';
import {
  CapsText,
  Dot,
  Input,
} from '../UI';
import { theme } from '../../config';

const styles:any = {
  brandLogoContainer: {},
  componentContainer: {
    height: '95%',
    width: '550px',
    borderRadius: theme.radiusSizes[1],
  },
};

const addWalletsComponent = () => (
  <Box
    bg={'white'}
    px={3}
    py={4}
    style={styles.componentContainer}
  >
    {/* Start Dialog Modal Heading */}
    <Flex
      flexDirection={'column'}
      mb={4}
    >
      <Flex flexDirection={'column'} width={1}>
        <Flex
          flexDirection={'column'}
          alignItems={'center'}
          style={styles.brandLogoContainer}
          width={1}
          mr={2}
          mb={2}
        >
          <Image src={require('../Sidebar/stone-icon.png')}/>
        </Flex>
        <CapsText
          textAlign={'center'}
          fontSize={5}
          fontWeight={'500'}
        >
          Activation
        </CapsText>
      </Flex>
    </Flex>
    {/* End Dialog Modal Heading */}

    {/* Begin Activation Requirements Group */}
    <Flex mb={4}>
      <Box
        pb={4}
        style={{
          borderRight: `1px solid ${theme.colors.gray}`,
        }}
        width={1 / 2}
      >
        <Flex
          flexDirection={'column'}
          alignItems={'center'}
          mb={3}
        >
          <Dot
            size={'30px'}
            style={{
              background: theme.colors.lightgray,
              position: 'relative',
            }}
          >
            <Text
              color={'blue'}
              fontSize={1}
              fontWeight={'500'}
              mb={2}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translateY(-50%) translateX(-50%)',
              }}
            >
              1
            </Text>
          </Dot>
          <CapsText
            color={'blue'}
            fontSize={2}
            fontWeight={'500'}
          >
            Node Amount
          </CapsText>
        </Flex>

        <Flex
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Box width={4 / 10}>
              <Card
                border={1}
                borderColor={theme.colors.gray}
                borderRadius={theme.radiusSizes[0]}
                p={1}
              >
                <Text
                  fontSize={4}
                  fontWeight={'600'}
                  textAlign={'center'}
                >
                  50%
                </Text>
              </Card>
          </Box>
        </Flex>

      </Box>
    </Flex>

    {/* End Activation Requirements Group */}

    {/* Begin Coin Address Field Group */}
    <Flex
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Box>
        <Box mb={3}>
          <Text
            fontSize={0}
            mb={2}
            textAlign={'center'}
          >
            Please send the exact amount of required coin to the address below:
          </Text>

          <Flex
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Box width={9 / 10}>
              <Input
                data-testid={'address-input'}
                size={3}
                type={'text'}
                placeholder={'Coin Address'}
              />
            </Box>
          </Flex>

          <Text
            fontSize={0}
            mt={2}
          >
            After the transaction has been confirmed the masternode will start automatically.
          </Text>
        </Box>

      </Box>
    </Flex>
    {/* End Coin Address Field Group */}

  </Box>
);

export default addWalletsComponent;
