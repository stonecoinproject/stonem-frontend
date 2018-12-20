import * as React from 'react';
import {
    Box,
} from 'rebass';
import {
  BrowserLink,
  CenteredText,
} from '../UI';

type authDialogFooterActionProps = {
  title: string,
  link: string,
  text: string,
};

const authDialogFooterAction = ({
  title,
  link,
  text }: authDialogFooterActionProps) => {
  return (
    <Box>
      <CenteredText mb={2}>{title}</CenteredText>

      <BrowserLink to={link}>
        <CenteredText fontWeight={'600'}>{text}</CenteredText>
      </BrowserLink>
    </Box>
  );
};

export default authDialogFooterAction;
