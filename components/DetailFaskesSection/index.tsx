import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { initializeMap } from '@lib/mapbox';

const DetailFaskesSection = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = initializeMap(mapContainerRef, {});

    mapRef.current = map;

    return () => {
      map.remove();
    };
  }, []);

  return (
    <>
      <div className='h-72 w-full' ref={mapContainerRef}></div>
      <div className='h-full flex container mx-auto px-8 py-16'>
        <div className='flex-grow'>
          <h3 className='font-bold font-primary text-4xl'>
            Dr. Hasan Sadikin Central General Hospital
          </h3>
          <h5 className='text-gray-400 mt-2'>Pasteur, Bandung</h5>
          <div className='relative w-full h-96 mt-6'>
            <Image
              className='rounded-lg shadow object-cover'
              layout='fill'
              src='https://video.antaranews.com/preview/2020/02/ori/FM_RS-HASAN-SADIKIN-BANDUNG-TANGANI-3-SUSPEK-BARU-VIRUS-CORONA.jpg'
            />
          </div>
          <div className='flex'></div>
        </div>
        <div className='ml-52'>
          <div className='w-96 border '>boking</div>
        </div>
      </div>
    </>
  );
};

export default DetailFaskesSection;
