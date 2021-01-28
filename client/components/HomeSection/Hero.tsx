import React from 'react';
import Image from 'next/image';
import TextInput from '@components/Form/TextInput';
import Button from '@components/Button';

const Hero = () => {
  return (
    <div className='h-full grid grid-cols-7 pt-24 gap-8 mb-32'>
      <div className='col-span-3 flex align-center justify-center flex-col'>
        <h1 className='text-8xl font-black font-primary'>Cari.</h1>
        <h1 className='text-8xl font-black font-primary'>Tes.</h1>
        <h1 className='text-8xl font-black text-primary font-primary'>Aman.</h1>
        <p className=' mt-9 text-lg' style={{ width: '500px' }}>
          Cari berbagai pilihan lokasi tes covid-19, mulai tes Rapid hingga
          PCR-SWAB terdekat dari tempatmu
        </p>
        <div className='flex mt-9'>
          <TextInput
            className='flex-grow'
            type='text'
            placeholder='Masukan Lokasimu'
          />
          <Button
            className='flex-grow-0 w-16 ml-4'
            type='primary'
            icon={<Image src='/icons/search.svg' width={32} height={32} />}
          />
        </div>
      </div>
      <div className='col-span-4 flex justify-center items-center'>
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
