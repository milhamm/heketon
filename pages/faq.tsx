import Layout from '@components/Layout';
import { faq } from '@lib/constants';
import React from 'react';

const FAQ = () => {
  return (
    <Layout>
      <div className='container mx-auto px-6 mt-24 mb-32'>
        <h1 className='font-bold text-3xl'>Frequently Asked Question</h1>
        <div className='mt-12'>
          {faq.map(({ title, description }) => (
            <div className='mb-6 '>
              <h4 className='font-medium text-xl mb-3 w-full lg:w-2/4'>
                {title}
              </h4>
              <p className='text-gray-400 w-2/4 w-full lg:w-2/4'>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
