import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import TextInput from '@components/Form/TextInput';
import Button from '@components/Button';
import LocationList from '@components/LocationList';
import useGeocode from '@hooks/useGeocode';
import axios from 'axios';

const Hero = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const {
    places,
    searchLocations,
    pickedLocation,
    setPickLocation,
  } = useGeocode();

  const onPick = (place) => {
    setPickLocation(place);
  };

  useEffect(() => {
    if (pickedLocation && pickedLocation.place_name) {
      const [long, lat] = pickedLocation.center;
      setSearch(pickedLocation.place_name);
      router.push(
        `/faskes?lat=${lat}&long=${long}&search=${pickedLocation.place_name}`
      );
    }
  }, [pickedLocation]);

  useEffect(() => {
    axios.get('/api/covid').then((data) => {
      console.log(data.data);
    });
  }, []);

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
          <div className='bg-white shadow-lg max-w-3xl w-full pr-4 pl-6 py-3 mx-auto rounded-lg flex mt-9'>
            <TextInput
              className='flex-grow'
              type='text'
              placeholder='Masukan Lokasimu'
              onChange={(e) => {
                searchLocations(e.target.value);
                setSearch(e.target.value);
              }}
              value={search}
            />
            {search && search.length > 0 && (
              <span
                className='h-full my-auto px-3 cursor-pointer hover:bg-gray-200 mx-2 transition-all rounded'
                onClick={() => {
                  searchLocations('');
                  setSearch('');
                }}
              >
                X
              </span>
            )}
            <Button
              className='flex-grow-0 w-16 ml-4'
              type='primary'
              icon={<Image src='/icons/search.svg' width={32} height={32} />}
            />
          </div>
          <LocationList places={places} pickLocation={onPick} />
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
