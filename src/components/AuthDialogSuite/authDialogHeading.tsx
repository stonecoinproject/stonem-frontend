import * as React from 'react';
import { Link as BrowserLink } from 'react-router-dom';
import {
    Box,
    Button,
    Flex,
    Image,
    Text,
} from 'rebass';
import { theme } from '../../config';
import { CapsText } from '../UI';

type authDialogHeadingProps = {
  title: string,
};

const styles:any = {
  brandLogoContainer: {
    width: '50px',
  },
};

const authDialogHeading = ({ title }: authDialogHeadingProps) => {
  return (
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
        <CapsText fontSize={5}>{title}</CapsText>
      </Flex>
    </Flex>
  );
};

export default authDialogHeading;
