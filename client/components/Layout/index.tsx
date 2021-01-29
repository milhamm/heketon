import Footer from '@components/Footer';
import Navbar from '@components/Navbar';
import Head from 'next/head';
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
  meta?: {
    title?: string;
    description?: string;
  };
};

const Layout = ({ children, meta }: LayoutProps) => {
  const pageTitle =
    meta && meta.title ? `${meta.title} | Tescov.id` : 'Tescov.id';
  const pageDescription =
    meta && meta.description
      ? `${meta.description}`
      : 'Cari berbagai pilihan lokasi tes Covid-19, mulai tes Rapid hingga PCR-SWAB terdekat dari tempatmu';
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} />
        <meta name='theme-color' content='#0097F7' />
        <meta property='og:title' content={pageTitle} />
        <meta property='og:description' content={pageDescription} />
        <meta property='og:image' content='https://i.imgur.com/Yn4wmk9.jpg' />
        <meta name='og:image:width' content='1200' />
        <meta name='og:image:height' content='600' />
        <meta name='og:type' content='website' />
        <meta property='twitter:title' content={pageTitle} />
        <meta property='twitter:description' content={pageDescription} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
