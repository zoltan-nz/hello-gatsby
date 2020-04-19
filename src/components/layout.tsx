import React, { FC } from 'react';
import Header from './header';

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
