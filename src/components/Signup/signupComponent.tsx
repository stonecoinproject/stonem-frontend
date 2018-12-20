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
  signupComponentContainer: {
    height: '95%',
    width: '550px',
    borderRadius: theme.radiusSizes[1],
  },
};

/**
 * Renders form fields for our signup component.
 */
const renderFormFields = () => {
  return (
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

        <Box mb={3}>
          <Input
            data-testid={'password-confirm-input'}
            theme={{
              size: 3,
            }}
            type={'password'}
            placeholder={'Confirm Password'} />
        </Box>
    </div>
  );
};

const signupComponent = () => (
  <Box
    bg={'white'}
    px={3}
    py={4}
    style={styles.signupComponentContainer}
  >
    <AuthDialogHeading title={'Sign Up'} />
    <Flex
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Box width={8 / 10}>
        {renderFormFields()}

        {/* Start Auth Dialog Footer */}
        <AuthDialogFooter>
          <Box>
            <CenteredText mb={2}>Have an account?</CenteredText>

            <BrowserLink to={'/signin'}>
              <CenteredText fontWeight={'600'}>Sign In</CenteredText>
            </BrowserLink>
          </Box>
        </AuthDialogFooter>
        {/* End Dialog Modal Footer */}
      </Box>
    </Flex>
  </Box>
);

export default signupComponent;
