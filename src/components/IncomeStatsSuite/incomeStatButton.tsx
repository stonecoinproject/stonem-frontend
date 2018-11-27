import * as React from 'react';
import {
    Button,
    Box,
    Flex,
} from 'rebass';

import { CapsText } from '../UI';

import { theme } from '../../config';

interface incomeStatButtonProps {
  variant: string;
}

const incomeStatButton = ({
    children,
    variant,
    ...props }:any) => {
  return (
      <Box {...props}>
            <Flex
                flexDirection={'column'}
                alignItems={'center'}
            >
                <Button variant={variant}>
                    <CapsText fontSize={1}>{children}</CapsText>
                </Button>
            </Flex>
       </Box>
  );
};

incomeStatButton.defaultProps = {
  variant: 'outlineDefault',
};

export default incomeStatButton;
