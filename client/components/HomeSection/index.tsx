import React from 'react';
import Benefit from './Benefit';
import Disclaimer from './Disclaimer';
import Flow from './Flow';
import Hero from './Hero';

const HomeSection = () => {
  return (
    <div className='container mx-auto px-6'>
      <Hero />
      <Flow />
      <Benefit />
      <Disclaimer />
    </div>
  );
};

export default HomeSection;
