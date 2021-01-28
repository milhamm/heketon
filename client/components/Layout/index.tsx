import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import Head from 'next/head';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  meta?: {
    title: string;
    description: string;
  };
};

const Layout = ({ children, meta }: LayoutProps) => {
  const pageTitle =
    meta && meta.title ? `${meta.title} | Nama App` : 'Nama App';
  const pageDescription =
    meta && meta.description ? `${meta.description}` : 'Description';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property='og:title' content={pageTitle}></meta>
        <meta name='description' content={pageDescription} />
        <meta property='og:description' content={pageDescription} />
      </Head>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
