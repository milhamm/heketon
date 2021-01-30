import React from 'react';
import Layout from '@components/Layout';
import FaskesSection from '@components/FaskesSection';

const Faskes = () => {
  const meta = {
    title: 'Cari Faskes',
  };

  return (
    <Layout meta={meta}>
      <FaskesSection />
    </Layout>
  );
};

export default Faskes;
