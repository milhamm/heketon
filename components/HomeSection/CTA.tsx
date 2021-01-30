import React from 'react';
import Image from 'next/image';
import Button from '@components/Button';

const CTA = () => {
  return (
    <div className='flex mb-32'>
      <div className='flex-1 flex items-center justify-center'>
        <Image src='/images/cta.png' width={490} height={255} />
      </div>
      <div className='flex-1'>
        <h4 className='text-2xl font-medium'>
          Cari tes didekatmu dengan cepat
        </h4>
        <p className='mt-12 text-gray-500 w-3/4'>
          Hanya dari gadget, kamu dapat mencari lokasi tes covid terdekat dari
          tempatmu. Kamu juga dapat booking jadwal tes agar kamu tidak perlu
          mengantri di lokasi tes
        </p>
        <Button type='primary' className='mt-12'>
          Mulai Cari Sekarang
        </Button>
      </div>
    </div>
  );
};

export default CTA;