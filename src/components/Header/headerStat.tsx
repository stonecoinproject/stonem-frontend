import * as React from 'react';
import {
    Box,
    Text,
} from 'rebass';

const headerStat = ({
    label,
    value,
    ...props }:any) => {
  return (
    <Box pt={2} mr={3}>
        <Text fontSize={1} textAlign="center">{label}</Text>
        <Text fontSize={3} textAlign="center">{value}</Text>
    </Box>
  );
};

export default headerStat;
