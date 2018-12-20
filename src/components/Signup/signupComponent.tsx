import * as React from 'react';
import {
  Box,
  Flex,
} from 'rebass';
import {
  fields,
  theme,
} from '../../config';
import {
  AuthDialogHeading,
  AuthDialogForm,
  AuthDialogFooter,
  AuthDialogFooterAction,
} from '../AuthDialogSuite';

const styles:any = {
  signupComponentContainer: {
    height: '95%',
    width: '550px',
    borderRadius: theme.radiusSizes[1],
  },
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
        <AuthDialogForm fields={fields.signupInputFields} />

        {/* Start Auth Dialog Footer */}
        <AuthDialogFooter>
          <AuthDialogFooterAction
            title={'Have an account?'}
            link={'/signin'}
            text={'Sign In'}
          />
        </AuthDialogFooter>
        {/* End Dialog Modal Footer */}
      </Box>
    </Flex>
  </Box>
);

export default signupComponent;
