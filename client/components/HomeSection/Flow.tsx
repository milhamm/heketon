import React from 'react';
import Image from 'next/image';
import { flow } from '@lib/constants';

type FlowItemsTypes = {
  image: string;
  caption: string;
};

const FlowItems = ({ image, caption }: FlowItemsTypes) => (
  <div className='flex-1 mx-6 flex flex-row lg:flex-col items-center justify-center'>
    <Image src={image} width={121} height={200} />
    <p className='mt-8 text-left lg:text-center ml-6  lg:ml-0 w-64 text-white'>
      {caption}
    </p>
  </div>
);

const Flow = () => {
  return (
    <div className='bg-primary rounded-lg mb-16 py-12 px-6'>
      <h2 className='text-center text-white font-bold text-3xl font-primary'>
        Alur Tes melalui tescov.id
      </h2>
      <div className='flex mt-6 flex-col lg:flex-row'>
        {flow.map(({ image, caption, number }) => (
          <FlowItems key={number} image={image} caption={caption} />
        ))}
      </div>
    </div>
  );
};

export default Flow;
