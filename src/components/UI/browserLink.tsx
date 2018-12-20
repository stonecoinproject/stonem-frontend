import * as React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../../config';

type browserLinkProps = {
  to: string,
  children?: React.ReactNode,
};

const styles = {
  linkStyles: {
    textDecoration: 'none',
    color: theme.colors.blue,
  },
};

const browserLink = ({
  children,
  to}: browserLinkProps) => {
  return (
    <Link
      to={to}
      style={styles.linkStyles}
    >
      {children}
    </Link>
  );
};

export default browserLink;
