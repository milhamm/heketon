import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import moment from 'moment';
import Layout from '@components/Layout';
import api from '@lib/api';
import withAuth from '@lib/withAuth';
import Button from '@components/Button';

const BookingItem = ({
  date,
  name,
  facilies,
  total_person,
  longitude,
  latitude,
}) => {
  return (
    <div className='border max-w-96 px-8 py-6'>
      <h1>{moment(date).format('DD MMMM YYYY')}</h1>
      <h4>{name}</h4>
      <div className='flex mt-8'>
        <div className='flex-none'>
          <Image src='/images/icons/test.svg' width={28} height={28} />
        </div>
        <div className='flex-grow ml-6'>
          <h4>Jenis Tes:</h4>
          <p className='text-gray-400'>{facilies}</p>
        </div>
      </div>
      <div className='flex mt-8'>
        <div className='flex-none'>
          <Image src='/images/icons/people.svg' width={28} height={28} />
        </div>
        <div className='flex-grow ml-6'>
          <h4>Jumlah Orang:</h4>
          <p className='text-gray-400'>{total_person}</p>
        </div>
      </div>
      <a
        href={`https://www.google.com/maps/dir/${latitude},${longitude}`}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button type='primary' className='mt-6'>
          Buka di Google Maps
        </Button>
      </a>
    </div>
  );
};

const Booking = () => {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const getBooking = async () => {
      try {
        const response = await api.get('/order/');
        setBooking(response.data.data);
      } catch (error) {
        console.log(error.response);
      }
    };
    getBooking();
  }, []);

  return (
    <Layout>
      <div className='container mx-auto px-6 mb-36'>
        <h1 className='text-2xl font-bold mt-24 mb-12'>Jadwal Tes Kamu</h1>
        {booking && booking.data ? (
          booking.map(
            ({
              date,
              hospital: { name, facilies, longitude, latitude },
              total_person,
            }) => (
              <BookingItem
                date={date}
                name={name}
                facilies={facilies}
                total_person={total_person}
                longitude={longitude}
                latitude={latitude}
              />
            )
          )
        ) : (
          <div className='w-full mt-24 flex flex-col items-center justify-center'>
            <Image src='/images/hanzo_nonburik.svg' width={241} height={218} />
            <p className='mt-6 text-gray-400'>
              Kamu belum memiliki riwayat apapun
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default withAuth(Booking);
