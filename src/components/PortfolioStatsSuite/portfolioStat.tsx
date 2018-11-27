import * as React from 'react';
import {
    Box,
    Text
} from 'rebass';

interface portfolioStatProps {
    label: string;
    value: string;
}

const portfolioStat = ({
    label,
    value,
  ...props }:any) => {

  return (
    <Box {...props}>
        <Text fontSize={1} textAlign="center">{label}</Text>
        <Text fontSize={3} textAlign="center">{value}</Text>
    </Box>
    );
};

export default portfolioStat;
