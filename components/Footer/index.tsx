import Button from '@components/Button';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='h-auto bg-primary w-full absolute bottom-0'>
      <div className='container mx-auto flex flex-col lg:flex-row py-8 px-6 justify-between'>
        <div className='flex-1'>
          <span className='font-bold text-3xl'>
            Tescov.<span className='text-white'>id</span>
          </span>
        </div>
        <div className='flex-1 ml-0 lg:ml-8'>
          <Link href='/'>
            <a>
              <div className='py-1 cursor-pointer'>
                <span className='text-white'>Home</span>
              </div>
            </a>
          </Link>

          <Link href='/faskes'>
            <a>
              <div className='py-1 cursor-pointer'>
                <span className='text-white'>Cari</span>
              </div>
            </a>
          </Link>
          <Link href='/faq'>
            <a>
              <div className='py-1 cursor-pointer'>
                <span className='text-white'>FAQ</span>
              </div>
            </a>
          </Link>
        </div>
        <div className='flex-1 ml-0 lg:ml-8'>
          <Link href='/us'>
            <a>
              <div className='py-1 cursor-pointer'>
                <span className='text-white'>About Us</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
