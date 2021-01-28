import Button from '@components/Button';
import React from 'react';

const Footer = () => {
  return (
    <div className='h-full bg-primary'>
      <div className='container mx-auto flex py-8 px-6 justify-between'>
        <div className='flex-1'>
          <span className='font-bold text-3xl'>
            Tescov.<span className='text-white'>id</span>
          </span>
        </div>
        <div className='flex-1 ml-8'>
          <div className='py-1 cursor-pointer'>
            <span className='text-white'>Home</span>
          </div>

          <div className='py-1 cursor-pointer'>
            <span className='text-white'>Cari</span>
          </div>
          <div className='py-1 cursor-pointer'>
            <span className='text-white'>Kami</span>
          </div>
        </div>
        <div className='flex-1 ml-8'>
          <div className='py-1 cursor-pointer'>
            <span className='text-white'>FAQ</span>
          </div>
          <div className='py-1 cursor-pointer'>
            <span className='text-white'>Terms & Condition</span>
          </div>
        </div>
        <div className='flex-1'>
          <Button className='float-right'>Masukan</Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
