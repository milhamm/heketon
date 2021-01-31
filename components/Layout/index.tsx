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
    <div className='min-h-screen relative'>
      <SEO meta={meta} />
      <Navbar />
      <main className='pb-36'>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
