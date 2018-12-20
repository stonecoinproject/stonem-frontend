import * as React from 'react';
import { Link as BrowserLink } from 'react-router-dom';
import {
    Box,
    Button,
    Flex,
    Text,
} from 'rebass';
import { theme } from '../../config';

type authDialogFooterProps = {
  children: React.ReactNode,
};

const authDialogFooter = ({ children }: authDialogFooterProps) => {
  return (
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
        {children}
      </Flex>
    </Flex>
  );
};

export default authDialogFooter;
