import Layout from '@components/Layout';
import withAuth from '@lib/withAuth';
import React from 'react';

const Booking = () => {
  return <Layout>booking</Layout>;
};

export default withAuth(Booking);
