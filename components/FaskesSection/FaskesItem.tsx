import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FaskesItem = ({ id, name, facilies, address, distance, thumbnail }) => {
  return (
    <div className='w-full flex mb-12 hover:bg-gray-100 px-4 py-4 rounded-lg transition-all cursor-pointer'>
      <div className='flex-initial h-32'>
        <div
          className='w-32 relative overflow-hidden rounded-lg'
          style={{ height: '120px' }}
        >
          <img
            src={thumbnail}
            alt={name}
            className='absolute shadow object-cover min-w-full min-h-full'
          />
        </div>
      </div>
      <Link href={`/faskes/${id}`}>
        <a>
          <div className='flex-auto flex flex-col justify-between h-full ml-4'>
            <div>
              <h5 className='font-bold text-lg hover:underline'>{name}</h5>
              <p className='text-gray-400'>{address}</p>
              {/* <p className='text-gray-700'>{facilies}</p> */}
            </div>
            <span className='font-medium'>{`${Number.parseFloat(
              distance
            ).toPrecision(2)}KM ● ${facilies}`}</span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default FaskesItem;
