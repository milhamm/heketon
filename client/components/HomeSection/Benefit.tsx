import React from 'react';
import Image from 'next/image';
import { benefit } from '@lib/constants';

const BenefitItems = ({ image, title, caption }) => (
  <div className='flex-1 mx-6 flex flex-row lg:flex-col items-center justify-between lg:justify-center mb-8'>
    <Image src={image} width={135} height={135} />
    <div className='ml-3 lg:ml-0'>
      <h4 className='font-bold mt-0 lg:mt-6 text-left lg:text-center '>
        {title}
      </h4>
      <p className='mt-3 text-left lg:text-center  w-64'>{caption}</p>
    </div>
  </div>
);

const Benefit = () => {
  return (
    <div className='w-full bg-white py-12 mb-16'>
      <h2 className='text-center font-primary text-2xl'>
        Nikmati Kemudahan Mencari Tempat Tes Covid
      </h2>
      <div className='flex flex-col lg:flex-row mt-16'>
        {benefit.map(({ image, title, caption, number }) => (
          <BenefitItems
            key={number}
            title={title}
            image={image}
            caption={caption}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefit;
