import React, { useState } from 'react';
import Image from 'next/image';
import TextInput from '@components/Form/TextInput';
import Button from '@components/Button';
import LocationList from '@components/LocationList';
import useGeocode from '@hooks/useGeocode';

const Hero = () => {
  const { places, searchLocations } = useGeocode();

  return (
    <div className='h-full flex pt-24 gap-8 mb-16 lg:mb-32'>
      <div className='flex-1 flex align-center justify-center flex-col'>
        <h1 className='text-8xl font-black font-primary'>Cari.</h1>
        <h1 className='text-8xl font-black font-primary'>Tes.</h1>
        <h1 className='text-8xl font-black text-primary font-primary'>Aman.</h1>
        <p className=' mt-9 text-lg w-full'>
          Cari berbagai pilihan lokasi tes covid-19, mulai tes Rapid hingga
          PCR-SWAB terdekat dari tempatmu
        </p>
        <div className='relative'>
          <div className='bg-white shadow-lg max-w-3xl w-full pr-4 py-3 mx-auto rounded-lg flex mt-9'>
            <TextInput
              className='flex-grow'
              type='text'
              placeholder='Masukan Lokasimu'
              onChange={searchLocations}
            />
            <Button
              className='flex-grow-0 w-16 ml-4'
              type='primary'
              icon={<Image src='/icons/search.svg' width={32} height={32} />}
            />
          </div>
          <LocationList places={places} />
        </div>
      </div>
      <div className='hidden lg:flex-1 lg:flex justify-center items-center '>
        <Image
          src='/images/hero.png'
          width={506}
          height={575}
          alt='People Home'
        />
      </div>
    </div>
  );
};
export default Hero;
