import React from 'react';

const Disclaimer = () => {
  return (
    <div
      className='bg-cheese w-full bg-disclaimer h-full bg-bottom-right-4 bg-no-repeat rounded-lg py-12 px-12 mb-12 lg:mb-32'
      style={{ backgroundSize: '20%' }}
    >
      <h4 className='font-bold text-disclaimer text-4xl'>Peringatan</h4>
      <p className='w-full lg:w-8/12 text-xl text-disclaimer mt-12'>
        Kami hanya menyediakan tes untuk <b>PENCEGAHAN</b> Covid-19. Jika
        sebelum tes anda telah dinyatakan positif Covid-19, anda Tidak Dapat
        melakukan tes di website ini dan Wajib melapor ke Rumah Sakit terdekat
        untuk tindakan lebih lanjut.
      </p>
      <p className='font-bold text-xl text-disclaimer mt-12'>
        Hotline Covid-19 Indonesia: 119
      </p>
    </div>
  );
};

export default Disclaimer;
