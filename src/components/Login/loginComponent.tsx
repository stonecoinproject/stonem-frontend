import * as React from 'react';
import {
  Box,
  Flex,
  Text,
} from 'rebass';
import { BrowserLink } from '../UI';
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
    <AuthDialogHeading title={'Sign In'} />

    <Flex
      alignItems={'center'}
      flexDirection={'column'}
    >
      <Box width={8 / 10}>
        <AuthDialogForm fields={fields.loginInputFields}/>

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
          <AuthDialogFooterAction
            title={"Don't have an account?"}
            link={'/signup'}
            text={'Sign Up'}
          />
        </AuthDialogFooter>
        {/* End Dialog Modal Footer */}
      </Box>
    </Flex>
  </Box>
);

export default loginComponent;
