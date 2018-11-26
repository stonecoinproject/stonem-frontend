import * as React from 'react';
import {
    Button,
    Flex,
} from 'rebass';

import { CapsText } from '../UI';

interface incomeStatsCardButtonProps {
  text: string;
}

const incomeStatsCardButton = ({
    text,
    variant,
    ...props }:any) => {
  return (
    <Flex
        flexDirection={'column'}
        alignItems={'center'}
        {...props}
    >
        <Button variant={variant}>
            <CapsText fontSize={1}>{text}</CapsText>
        </Button>
    </Flex>
  );
};

export default incomeStatsCardButton;
