import Layout from '@components/Layout';
import Image from 'next/image';
import React from 'react';

const Us = () => {
  return (
    <Layout>
      <div className='container mx-auto px-6 mt-24 mb-36'>
        <h1 className='font-bold text-3xl'>
          Tentang <span className='text-primary'>Kami</span>
        </h1>
        <p className='w-full lg:w-2/4 mt-8'>
          Kami adalah Double Eng One Dit, yaitu sebuah tim beranggotakan 3 orang
          mahasiswa Telkom University yang dibentuk untuk perlombaan Hackathon
          Devday dari Laboratorium RPL-GDC. Tim kami terdiri dari:
        </p>

        <div className='mt-12'>
          <h1 className='font-bold'>Muhammad Ilham Mubarak</h1>
          <p className='mb-4'>Sebagai Ketua tim dan Frontend Developer</p>
          <Image src='/images/ang.png' width={200} height={200} />
        </div>
        <div className='mt-12'>
          <h1 className='font-bold'>Muhammad Avtara Khrisna</h1>
          <p className='mb-4'>Sebagai Backend Developer</p>
          <Image src='/images/eng.png' width={200} height={200} />
        </div>
        <div className='mt-12'>
          <h1 className='font-bold'>Ditya Athallah</h1>
          <p className='mb-4'>Sebagai UI/UX Designer</p>
          <Image src='/images/dudu.png' width={200} height={200} />
        </div>
      </div>
    </Layout>
  );
};

export default Us;
