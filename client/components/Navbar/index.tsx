import React from 'react';
import Link from 'next/link';
import Button from '@components/Button';

type NavItems = {
  children: React.ReactNode;
  link: string;
};

const NavItems = ({ children, link }: NavItems) => {
  return (
    <Link href={link}>
      <span
        className='text-center py-2 hover:bg-gray-200 cursor-pointer transition-colors rounded mx-4 font-primary'
        style={{ width: '113px' }}
      >
        {children}
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <div className='sticky top-0 w-full bg-white shadow-lg z-40'>
      <div className='container px-6 py-3 flex mx-auto'>
        <div className='flex-none flex items-center justify-center'>
          <span className='font-bold text-xl'>
            Tescov.<span className='text-primary'>id</span>
          </span>
        </div>
        <div className='flex flex-auto items-center justify-end content-end'>
          <NavItems link='/'>Home</NavItems>
          <NavItems link='/cari'>Cari</NavItems>
          <NavItems link='/about'>Kami</NavItems>
          <div className='ml-4 ' style={{ width: '113px' }}>
            <Button className='w-full' type='secondary'>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
