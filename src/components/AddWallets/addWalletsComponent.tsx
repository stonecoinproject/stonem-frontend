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
  Input,
} from '../UI';
import { theme } from '../../config';
import { default as ActivationRequirementHeading } from './activationRequirementHeading';
import {
  default as Triangle,
  Direction,
} from '../UI/triangle';

const styles:any = {
  brandLogoContainer: {},
  componentContainer: {
    height: '95%',
    width: '550px',
    borderRadius: theme.radiusSizes[1],
  },
  activationRequirementsContainer: {
    borderRight: `1px solid ${theme.colors.gray}`,
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
        style={styles.activationRequirementsContainer}
        width={1 / 2}
      >
        <ActivationRequirementHeading
          stepNumber={'1'}
          title={'Node Amount'}
        />
        <Flex
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Flex width={5 / 10}>
            <Box mr={2}>
                <Card
                  border={2}
                  borderColor={theme.colors.gray}
                  borderRadius={theme.radiusSizes[0]}
                  p={1}
                  px={3}
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
            <Box>
              <Box mb={1}>
                <Triangle bg={theme.colors.lightgreen} />
              </Box>

              <Box>
                <Triangle
                  bg={theme.colors.lilac}
                  direction={Direction.DOWN}
                />
              </Box>
            </Box>
        </Flex>
      </Flex>

      </Box>
      <Box
        pb={4}
        width={1 / 2}
      >
        <ActivationRequirementHeading
          stepNumber={'2'}
          title={'Coin Required'}
        />
        <Flex
          flexDirection={'column'}
          alignItems={'center'}
        >
          <Box width={6 / 10}>
              <Card p={1}>
                <CapsText
                  fontSize={4}
                  fontWeight={'600'}
                  textAlign={'center'}
                >
                  750 Coin
                </CapsText>
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
                theme = {{
                  size: 2,
                  focusHighlight: 'blue',
                }}
                style={{
                  fontWeight: 600,
                  fontSize: theme.fontSizes[3],
                  paddingLeft: theme.space[2],
                  paddingRight: theme.space[2],
                  borderColor: theme.colors.blue,
                  borderWidth: theme.space[1] / 2,
                }}
                type={'text'}
                onFocus={(e:React.SyntheticEvent<HTMLInputElement>) => (e.target as HTMLInputElement).select()}
                defaultValue={'so2u108sanuoziuboaybluyw9psiusblhjbzouyba'}
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
