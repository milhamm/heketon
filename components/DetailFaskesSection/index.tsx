import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { addMarkers, initializeMap } from '@lib/mapbox';
import Button from '@components/Button';
import { SingleDatePicker } from 'react-dates';
import api from '@lib/api';
import { useAuth } from '@context/authentication';
import moment from 'moment';
import SEO from '@components/SEO';
import { title } from 'process';
import { toGeoJSON } from '@lib/constants';

const DetailFaskesSection = () => {
  const router = useRouter();
  const { user } = useAuth();

  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const [hospital, setHospital] = useState(null);
  const [focused, setFocused] = useState(false);
  const [date, setDate] = useState(null);
  const [qty, setQty] = useState(1);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const map = initializeMap(mapContainerRef, {});
    if (hospital) {
      const { longitude, latitude, name, address } = hospital;

      addMarkers(
        map,
        toGeoJSON([
          {
            longitude: longitude,
            latitude: latitude,
            name: name,
            address: address,
          },
        ])
      );
      mapRef.current = map;
    }

    return () => {
      map.remove();
    };
  }, [hospital]);

  useEffect(() => {
    const getDetailHospital = async (id) => {
      const response = await api.get(`/hospital/detail/${id}`);
      setHospital(response.data.data);
    };

    if (router.query && router.query.uuid) {
      getDetailHospital(router.query.uuid);
    }
  }, [router]);

  const handleCreateJadwal = async () => {
    try {
      const response = await api.post('/order/add', {
        date: moment(date).toISOString(),
        total_person: qty,
        user_id: user.id,
        hospital_id: hospital.id,
      });
      router.push(`/faskes/${hospital.id}/success`);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <SEO meta={{ title: hospital && hospital.name }} />
      <div className='h-72 w-full' ref={mapContainerRef}></div>
      <div className='h-full flex flex-col lg:flex-row container mx-auto px-8 py-16'>
        <div className='flex-grow'>
          <h3 className='font-bold font-primary text-4xl'>
            {hospital && hospital.name}
          </h3>
          <div className='relative w-full h-96 mt-6 overflow-hidden shadow-lg rounded-lg'>
            <img
              className='absolute  object-cover min-w-full min-h-full'
              src={hospital && hospital.thumbnail}
              alt={hospital && hospital.name}
            />
          </div>
          <div className='flex mt-8'>
            <div className='flex-none'>
              <Image src='/images/icons/address.svg' width={28} height={28} />
            </div>
            <div className='flex-grow ml-6'>
              <h4>Alamat lengkap:</h4>
              <p className='text-gray-400'>{hospital && hospital.address}</p>
              <a
                href={`https://www.google.com/maps/dir/${
                  hospital && hospital.latitude
                },${hospital && hospital.longitude}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button type='secondary' className='mt-4'>
                  Buka di Google Map
                </Button>
              </a>
            </div>
          </div>
          <div className='flex mt-8'>
            <div className='flex-none'>
              <Image src='/images/icons/phone.svg' width={28} height={28} />
            </div>
            <div className='flex-grow ml-6'>
              <h4>No Telepon:</h4>
              <p className='text-gray-400'>{hospital && hospital.telp}</p>
            </div>
          </div>
          <div className='flex mt-8'>
            <div className='flex-none'>
              <Image src='/images/icons/test.svg' width={28} height={28} />
            </div>
            <div className='flex-grow ml-6'>
              <h4>Jenis Tes:</h4>
              <p className='text-gray-400'>{hospital && hospital.facilies}</p>
            </div>
          </div>
          <div className='flex mt-8'>
            <div className='flex-none'>
              <Image src='/images/icons/clock.svg' width={28} height={28} />
            </div>
            <div className='flex-grow ml-6'>
              <h4>Jadwal Buka:</h4>
              {hospital && hospital.schedules
                ? hospital.schedules.map(
                    ({ day, time_start, time_end }, idx) => (
                      <p
                        key={idx}
                        className='text-gray-400'
                      >{`${day}: ${time_start} - ${time_end}`}</p>
                    )
                  )
                : 'Tidak ada'}
            </div>
          </div>
        </div>
        <div className='ml-0 lg:ml-32'>
          <div className='w-auto lg:w-96 border px-6 py-6 rounded mt-12 lg:mt-0 mb-24'>
            <h4 className='font-bold'>Jadwalkan Tesmu</h4>
            <p className='mt-3 text-gray-400'>
              Kamu dapat menjadwalkan tes di Faskes ini secara online
            </p>
            <div className='flex flex-col mt-12'>
              <div className='flex justify-between'>
                <span className='flex-1 text-gray-400'>Buka:</span>
                <div className='ml-4 flex-1'>
                  {hospital && hospital.schedules
                    ? hospital.schedules.map(
                        ({ day, time_start, time_end }, idx) => (
                          <p
                            key={idx}
                            className=''
                          >{`${day}: ${time_start} - ${time_end}`}</p>
                        )
                      )
                    : 'Tidak ada'}
                </div>
              </div>
              <div className='flex justify-between mt-4'>
                <span className='text-gray-400 flex-1'>Jumlah Orang:</span>
                <div className='ml-4 flex-1'>
                  <select
                    className='w-full py-2 px-3 border border-gray-200 rounded-md shadow-sm text-sm'
                    onChange={(e) => {
                      setQty(Number.parseInt(e.target.value));
                    }}
                    value={qty}
                  >
                    <option value={1} className='bg-white'>
                      1
                    </option>
                    <option value={2} className='bg-white'>
                      2
                    </option>
                    <option value={3} className='bg-white'>
                      3
                    </option>
                  </select>
                </div>
              </div>
              <div className='flex justify-between mt-6'>
                <span className='text-gray-400 flex-1'>Tanggal:</span>
                <div className='ml-4 flex-1'>
                  <SingleDatePicker
                    block
                    date={date}
                    onDateChange={(date) => {
                      setDate(date);
                    }}
                    hideKeyboardShortcutsPanel
                    focused={focused}
                    numberOfMonths={1}
                    anchorDirection='right'
                    onFocusChange={({ focused }) => {
                      setFocused(focused);
                    }}
                    displayFormat='DD MMM YYYY'
                  />
                </div>
              </div>
            </div>
            <div className='flex mt-6'>
              <input
                className='flex-none mt-1'
                type='checkbox'
                id='agree'
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
              <label className='flex-grow ml-3 text-sm' htmlFor='agree'>
                Saya belum mengetahui bahwa saya positif Covid-19
              </label>
            </div>
            <Button
              type='primary'
              className='w-full mt-6'
              disabled={!checked || !date}
              onClick={() => {
                handleCreateJadwal();
              }}
            >
              Buat Jadwal
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailFaskesSection;
