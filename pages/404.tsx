import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-primary flex-col'>
      <Image src='/images/404.png' width={360} height={472} />
      <p className='text-white text-2xl mt-12'>
        Wah kami tidak dapat mencari laman ini
      </p>
      <div className='mt-6'>
        <Link href='/'>
          <a>
            <span className='underline text-white cursor'>
              Kembali ke laman home
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
