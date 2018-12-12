import * as React from 'react';
import { Link as BrowserLink } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Link,
  Image,
  Text,
} from 'rebass';
import {
  CapsText,
  Input,
} from '../UI';
import { theme } from '../../config';

const styles:any = {
  brandLogoContainer: {
    width: '50px',
  },
  componentContainer: {
    height: '95%',
    width: '550px',
    borderRadius: theme.radiusSizes[1],
  },
};

const loginComponent = () => (
  <Box
    bg={'white'}
    px={3}
    py={4}
    style={styles.componentContainer}
  >
    {/* Start Dialog Modal Heading */}
    <Flex
      alignItems={'center'}
      flexDirection={'column'}
      justifyContent={'center'}
      mb={3}
    >
      <Flex>
        <Box
          style={styles.brandLogoContainer}
          mr={2}
        >
          <Image src={require('../Sidebar/stone-icon.png')}/>
        </Box>
        <CapsText fontSize={5}>
          Sign In
        </CapsText>
      </Flex>
    </Flex>
    {/* End Dialog Modal Heading */}

    <Flex
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Box width={8 / 10}>
        <Box mb={3}>
          <Input
            data-testid={'email-input'}
            size={3}
            type={'email'}
            placeholder={'Email Address'} />
        </Box>

        <Box mb={3}>
          <Input
            data-testid={'password-input'}
            size={3}
            type={'password'}
            placeholder={'Password'} />
        </Box>

        <Box mb={4}>
          <Link
            href={'/forgotPassword'}
            style={{
              textDecoration: 'none',
            }}
          >
            <Text fontWeight={'400'} fontSize={1}>
              Forgot Password
            </Text>
          </Link>
        </Box>

       {/* Start Dialog Footer */}
        <Flex
          width={1}
          mb={4}
        >
          <Box width={1 / 2}>
            <Button
              py={3}
              style={{
                width: '100%',
              }}
            >
              <Text fontWeight={'normal'}>Submit</Text>
            </Button>
          </Box>

            <Flex
              alignItems={'center'}
              justifyContent={'center'}
              flexDirection={'column'}
              width={1 / 2}
            >
              <Box>
                <Text
                  fontSize={1}
                  textAlign={'center'}
                  mb={2}
                  >
                    Don't have an account?
                </Text>
                <BrowserLink
                  to={'/signup'}
                  style={{
                    textDecoration: 'none',
                    color: theme.colors.blue,
                  }}
                >
                  <Text
                    textAlign={'center'}
                    fontSize={1}
                    fontWeight={'600'}
                  >
                    Sign Up
                  </Text>
                </BrowserLink>
              </Box>
            </Flex>
        </Flex>
        {/* End Dialog Modal Footer */}
      </Box>
    </Flex>
  </Box>
);

export default loginComponent;
