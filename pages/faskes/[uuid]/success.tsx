import Button from '@components/Button';
import Layout from '@components/Layout';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BookSuccess = () => {
  return (
    <Layout>
      <div className='flex items-center justify-center h-screen container mx-auto'>
        <div className=''>
          <h1 className='font-bold text-3xl'>Jadwal kamu telah dibuat!</h1>
          <p className='mt-3 text-gray-400'>
            Kini kamu tinggal menunggu jadwal
          </p>
          <Link href='/booking'>
            <a>
              <Button type='primary' className='mt-5'>
                Riwayat Jadwal
              </Button>
            </a>
          </Link>
        </div>
        <Image src='/images/success.svg' width={695} height={520} />
      </div>
    </Layout>
  );
};

export default BookSuccess;
