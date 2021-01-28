import Head from 'next/head';
import Navbar from '@components/Navbar';
import Layout from '@components/Layout';
import HomeSection from '@components/HomeSection';

export default function Home() {
  return (
    <Layout>
      <HomeSection />
    </Layout>
  );
}
