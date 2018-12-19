import * as React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Flex,
    Card,
    Image,
} from 'rebass';
import { default as SidebarComponentItem } from './sidebarComponentItem';
import {
  app,
  theme,
} from '../../config';

interface SidebarComponentStyles {
  sidebarComponentItemStyles: object;
  sidebarComponentContainer: object;
  sidebarComponentBrandContainer: object;
}

const sidebarComponentItemStyles = {
  width: '100%',
  height: theme.Header.height,
};

const styles:SidebarComponentStyles = {
  sidebarComponentItemStyles,
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

const sidebarComponent = ({
  location,
  ...props }:any) => (
  <Box style={styles.sidebarComponentContainer} {...props}>
    <Link to={'/'}>
      <SidebarComponentItem
        data-testid={'sidebar-component-item'}
        style={{
          ...sidebarComponentItemStyles,
          ...styles.sidebarComponentBrandContainer,
        }}
      >
        <Image src={require('../Sidebar/stone-icon.png')}/>
      </SidebarComponentItem>
    </Link>
    {/*
      * Create sidebar links for every sidebarLink object defined in the config.
      */}
    {
      Object
        .keys(app.sidebarLinks)
        .map((
          link,
          i,
        ) => {
          const currentLink = app.sidebarLinks[link];
          // tslint:disable-next-line:variable-name
          const Icon = currentLink.icon;
          const isActiveSidebarLink = link === location.pathname;

          return (
            <Link
              key={i}
              to={link}
            >
              <SidebarComponentItem
                data-testid={'sidebar-component-item'}
                style={styles.sidebarComponentItemStyles}
              >
                <Card
                  borderRadius={theme.radiusSizes[1]}
                  bg={isActiveSidebarLink && theme.colors.blue}
                  style={{
                    width: '45px',
                    height: '45px',
                  }}
                >
                {
                  // TODO: create a <DeadCentered /> component that centers
                  // child elements vertically and horizontally.
                }
                  <Flex
                    alignItems={'center'}
                    justifyContent={'center'}
                  >
                    <Flex
                      flexDirection={'column'}
                      width={1}
                      alignItems={'center'}
                      style={{
                        marginTop: '50%',
                        transform: 'translateY(-50%)',
                      }}
                    >
                      <Icon baseBg={isActiveSidebarLink ? '#fff' : theme.colors.darkgray} />
                    </Flex>
                  </Flex>
                </Card>
              </SidebarComponentItem>

            </Link>
          );
        })}

  </Box>
);

export default sidebarComponent;
