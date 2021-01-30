import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FaskesItem = () => {
  return (
    <div className='w-full flex mb-12 hover:bg-gray-100 px-4 py-4 rounded-lg transition-all cursor-pointer'>
      <div className='flex-initial h-32'>
        <div className='w-32 relative h-full'>
          <Image
            className='rounded-lg shadow object-cover'
            layout='fill'
            src='https://video.antaranews.com/preview/2020/02/ori/FM_RS-HASAN-SADIKIN-BANDUNG-TANGANI-3-SUSPEK-BARU-VIRUS-CORONA.jpg'
          />
        </div>
      </div>
      <Link href='/faskes/aaaa'>
        <a>
          <div className='flex-auto flex flex-col justify-between h-full ml-4'>
            <div>
              <h5 className='font-bold hover:underline'>
                Dr. Hasan Sadikin Central General Hospital
              </h5>
              <span className='text-gray-400'>Pasteur, Bandung</span>
            </div>
            <span className='font-bold text-lg'>2,5KM</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default FaskesItem;
