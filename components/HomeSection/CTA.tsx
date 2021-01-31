import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@components/Button';

const CTA = () => {
  return (
    <div className='flex flex-col lg:flex-row mb-32'>
      <div className='flex-1 lg:flex items-center justify-center mb-6 hidden'>
        <Image src='/images/cta.png' width={490} height={255} />
      </div>
      <div className='flex-1'>
        <h4 className='text-2xl font-bold'>Cari tes didekatmu dengan cepat</h4>
        <p className='mt-12 text-gray-500 w-full lg:w-3/4'>
          Hanya dari gadget, kamu dapat mencari lokasi tes covid terdekat dari
          tempatmu. Kamu juga dapat booking jadwal tes agar kamu tidak perlu
          mengantri di lokasi tes
        </p>
        <Link href='/faskes'>
          <a>
            <Button type='primary' className='mt-12'>
              Mulai Cari Sekarang
            </Button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CTA;
