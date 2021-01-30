import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import SEO from '@components/SEO';
import React from 'react';
import { MetaType } from 'types';

type LayoutProps = {
  children: React.ReactNode;
  meta?: MetaType;
};

const Layout = ({ children, meta }: LayoutProps) => {
  return (
    <>
      <SEO meta={meta} />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
