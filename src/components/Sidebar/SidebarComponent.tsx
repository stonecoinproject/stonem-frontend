import React from 'react';
import {
    Box,
    Flex,
    Image,
    Heading,
    Text,
} from 'rebass';
import { app, theme } from '../../config';

interface SidebarComponentStyles {
  SidebarComponentContainer: object;
  SidebarComponentBrandContainer: object;
}

const sidebarComponentItemStyles = {
  width: '100%',
  height: theme.Header.height,
};

const styles:SidebarComponentStyles = {
  SidebarComponentContainer: {
    position: 'fixed',
    width: theme.Sidebar.width,
    top: 0,
    bottom: 0,
    background: theme.colors.lightergray,
    borderRight: `1px solid ${theme.colors.gray}`,
  },
  SidebarComponentBrandContainer: {
    ...sidebarComponentItemStyles,
    borderBottom: `1px solid ${theme.colors.gray}`,
  },
};

const SidebarComponentItem = ({ children, cssStyles }:any) => {
  return (
    <Flex
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      css={{ 
        ...sidebarComponentItemStyles,
        ...cssStyles,
      }}
    >
        <Box px={3}>
          {children}
        </Box>
    </Flex>
  );
};

const SidebarComponent = ({ ...props }:any) => (
  <Box css={styles.SidebarComponentContainer} {...props}>

    <SidebarComponentItem cssStyles={styles.SidebarComponentBrandContainer}>
      <Image src={require('../Sidebar/stone-icon.png')}/>
    </SidebarComponentItem>

    <SidebarComponentItem>
      <Image src={require('../Sidebar/add-masternode.svg')}/>
    </SidebarComponentItem>

    <SidebarComponentItem>
      <Image src={require('../Sidebar/masternode-management.svg')}/>
    </SidebarComponentItem>

    <SidebarComponentItem>
      <Image src={require('../Sidebar/wallet-management.svg')}/>
    </SidebarComponentItem>
  </Box>
);

export default SidebarComponent;
