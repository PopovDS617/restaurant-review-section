import React from 'react';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  return (
    <React.Fragment>
      <Header />
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
