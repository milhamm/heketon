import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { initializeMap } from '@lib/mapbox';
import Button from '@components/Button';
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController,
} from 'react-dates';

const DetailFaskesSection = () => {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const [focused, setFocused] = useState(false);

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
      <div className='h-full flex flex-col lg:flex-row container mx-auto px-8 py-16'>
        <div className='flex-grow'>
          <h3 className='font-bold font-primary text-4xl'>
            Dr. Hasan Sadikin Central General Hospital
          </h3>
          <div className='relative w-full h-96 mt-6'>
            <Image
              className='rounded-lg shadow object-cover'
              layout='fill'
              src='https://video.antaranews.com/preview/2020/02/ori/FM_RS-HASAN-SADIKIN-BANDUNG-TANGANI-3-SUSPEK-BARU-VIRUS-CORONA.jpg'
            />
          </div>
          <div className='flex mt-8'>
            <div className='flex-none'>
              <Image src='/images/icons/address.svg' width={28} height={28} />
            </div>
            <div className='flex-grow ml-6'>
              <h4>Alamat lengkap:</h4>
              <p className='text-gray-400'>
                Jl. Pasteur No.38, Pasteur, Kec. Sukajadi, Kota Bandung, Jawa
                Barat 40161
              </p>
            </div>
          </div>
          <div className='flex mt-8'>
            <div className='flex-none'>
              <Image src='/images/icons/phone.svg' width={28} height={28} />
            </div>
            <div className='flex-grow ml-6'>
              <h4>No Telepon:</h4>
              <p className='text-gray-400'>(022) 2034953</p>
            </div>
          </div>
          <div className='flex mt-8'>
            <div className='flex-none'>
              <Image src='/images/icons/test.svg' width={28} height={28} />
            </div>
            <div className='flex-grow ml-6'>
              <h4>Jenis Tes:</h4>
              <p className='text-gray-400'>Swab dan PCR</p>
            </div>
          </div>
          <div className='flex mt-8'>
            <div className='flex-none'>
              <Image src='/images/icons/clock.svg' width={28} height={28} />
            </div>
            <div className='flex-grow ml-6'>
              <h4>Jadwal Buka:</h4>
              <p className='text-gray-400'>Senin - Jum’at, jam 10.00 - 15.00</p>
            </div>
          </div>
        </div>
        <div className='ml-0 lg:ml-32'>
          <div className='w-auto lg:w-96 border px-6 py-6 rounded mt-12 lg:mt-0'>
            <h4 className='font-bold'>Jadwalkan Tesmu</h4>
            <p className='mt-3 text-gray-400'>
              Kamu dapat menjadwalkan tes di Faskes ini secara online
            </p>
            <div className='flex flex-col mt-12'>
              <div className='flex justify-between text-right'>
                <span className='text-gray-400'>Buka:</span>
                <div className='ml-4'>
                  <p>Senin-Jumat</p>
                  <p>10.00 - 15.00</p>
                </div>
              </div>
              <div className='flex justify-between text-right mt-6'>
                <span className='text-gray-400'>Jumlah Orang:</span>
              </div>
            </div>
            <Button type='primary' className='w-full mt-6'>
              Cari Jadwal
            </Button>
          </div>
          <SingleDatePicker
            focused={focused}
            numberOfMonths={1}
            onFocusChange={({ focused }) => {
              setFocused(focused);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default DetailFaskesSection;
