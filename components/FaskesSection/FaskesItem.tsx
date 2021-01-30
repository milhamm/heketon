import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FaskesItem = ({ name, address, distance, thumbnail }) => {
  return (
    <div className='w-full flex mb-12 hover:bg-gray-100 px-4 py-4 rounded-lg transition-all cursor-pointer'>
      <div className='flex-initial h-32'>
        <div
          className='w-32 relative overflow-hidden rounded-lg'
          style={{ height: '120px' }}
        >
          {/* <Image
            className=''
            layout='fill'
            src='https://video.antaranews.com/preview/2020/02/ori/FM_RS-HASAN-SADIKIN-BANDUNG-TANGANI-3-SUSPEK-BARU-VIRUS-CORONA.jpg'
          /> */}
          <img
            src={thumbnail}
            alt={name}
            className='absolute  shadow object-cover min-w-full min-h-full'
          />
        </div>
      </div>
      <Link href='/faskes/aaaa'>
        <a>
          <div className='flex-auto flex flex-col justify-between h-full ml-4'>
            <div>
              <h5 className='font-bold hover:underline'>{name}</h5>
              <span className='text-gray-400'>{address}</span>
            </div>
            <span className='font-bold text-lg'>{`${Number.parseFloat(
              distance
            ).toPrecision(2)}KM`}</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default FaskesItem;
