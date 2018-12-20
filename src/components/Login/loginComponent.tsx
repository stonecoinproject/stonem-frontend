import * as React from 'react';
import {
  Box,
  Flex,
  Text,
} from 'rebass';
import {
  BrowserLink,
  CenteredText,
  Input,
} from '../UI';
import { theme } from '../../config';
import {
  AuthDialogHeading,
  AuthDialogFooter,
} from '../AuthDialogSuite';

const styles:any = {
  componentContainer: {
    height: '95%',
    width: '550px',
    borderRadius: theme.radiusSizes[1],
  },
};

const renderFields = () => (
  <div>
    <Box mb={3}>
      <Input
        data-testid={'email-input'}
        theme={{
          size: 3,
        }}
        type={'email'}
        placeholder={'Email Address'} />
    </Box>

    <Box mb={3}>
      <Input
        data-testid={'password-input'}
        theme={{
          size: 3,
        }}
        type={'password'}
        placeholder={'Password'} />
    </Box>
  </div>
);

const loginComponent = () => (
  <Box
    bg={'white'}
    px={3}
    py={4}
    style={styles.componentContainer}
  >
    <AuthDialogHeading title={'Sign In'} />

    <Flex
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Box width={8 / 10}>
        {renderFields()}

        <Box mb={4}>
          <BrowserLink to={'/forgotPassword'}>
            <Text
              fontWeight={'400'}
              fontSize={1}
            >
              Forgot Password
            </Text>
          </BrowserLink>
        </Box>

       {/* Start Dialog Footer */}
        <AuthDialogFooter>
          <Box>
            <CenteredText mb={2}>Don't have an account?</CenteredText>

            <BrowserLink to={'/signup'}>
              <CenteredText fontWeight={'600'}>Sign Up</CenteredText>
            </BrowserLink>
          </Box>
        </AuthDialogFooter>
        {/* End Dialog Modal Footer */}
      </Box>
    </Flex>
  </Box>
);

export default loginComponent;
