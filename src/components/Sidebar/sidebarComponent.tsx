import * as React from 'react';
import {
    Box,
    Flex,
    Image,
} from 'rebass';
import { default as SidebarComponentItem } from './sidebarComponentItem';
import {
  AddMasternodeIcon,
  MasternodeManagementIcon,
  WalletManagementIcon,
} from '../Icons';
import { theme } from '../../config';

interface SidebarComponentStyles {
  sidebarComponentContainer: object;
  sidebarComponentBrandContainer: object;
}

const sidebarComponentItemStyles = {
  width: '100%',
  height: theme.Header.height,
};

const styles:SidebarComponentStyles = {
  sidebarComponentContainer: {
    position: 'fixed',
    width: theme.Sidebar.width,
    top: 0,
    bottom: 0,
    background: theme.colors.lightergray,
    borderRight: `1px solid ${theme.colors.gray}`,
  },
  sidebarComponentBrandContainer: {
    ...sidebarComponentItemStyles,
    borderBottom: `1px solid ${theme.colors.gray}`,
  },
};

const sidebarComponent = ({ ...props }:any) => (
  <Box css={styles.sidebarComponentContainer} {...props}>
    <SidebarComponentItem
      data-testid={'sidebar-component-item'}
      css={{
        ...sidebarComponentItemStyles,
        ...styles.sidebarComponentBrandContainer,
      }}
    >
      <Image src={require('../Sidebar/stone-icon.png')}/>
    </SidebarComponentItem>

    <SidebarComponentItem data-testid={'sidebar-component-item'}>
      <AddMasternodeIcon />
    </SidebarComponentItem>

    <SidebarComponentItem data-testid={'sidebar-component-item'}>
      <MasternodeManagementIcon />
    </SidebarComponentItem>

    <SidebarComponentItem data-testid={'sidebar-component-item'}>
      <WalletManagementIcon />
    </SidebarComponentItem>
  </Box>
);

export default sidebarComponent;
