import * as React from 'react';
import {
    Box,
    Text,
} from 'rebass';

type portfolioStatProps = {
  label: string;
  value: string;
  pt?: number;
  mr?: number;
};

const portfolioStat = ({
    label,
    value,
  ...props }:portfolioStatProps) => {

  return (
    <Box {...props}>
        <Text
            fontSize={1}
            textAlign="center"
        >
            {label}
        </Text>
        <Text
            fontSize={3}
            textAlign="center"
        >
            {value}
        </Text>
    </Box>
  );
};

export default portfolioStat;
