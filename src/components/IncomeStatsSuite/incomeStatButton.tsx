import * as React from 'react';
import {
    Button,
    Box,
    Flex,
} from 'rebass';

import { CapsText } from '../UI';

type incomeStatButtonProps = {
  variant?: string;
  children?: React.ReactNode;
  mb?: number;
  onClick?: React.ReactEventHandler<HTMLButtonElement>
};

const incomeStatButton = ({
    children,
    variant,
    ...props }:incomeStatButtonProps) => {
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
