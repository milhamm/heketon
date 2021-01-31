import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import TextInput from '@components/Form/TextInput';
import Button from '@components/Button';
import LocationList from '@components/LocationList';
import { mockgeoJSON, toGeoJSON } from '@lib/constants';
import { addMarkers, draggableMarker, flyTo, initializeMap } from '@lib/mapbox';
import useLocation from '@hooks/useLocation';
import useGeocode from '@hooks/useGeocode';
import FaskesItem from './FaskesItem';
import api from '@lib/api';

const FaskesSection = () => {
  const router = useRouter();

  const [search, setSearch] = useState('');
  const [hospital, setHospital] = useState(null);

  const mapRef = useRef(null);
  const markerRef = useRef(null);
  const mapContainerRef = useRef(null);

  const location = useLocation();

  const {
    places,
    searchLocations,
    pickedLocation,
    setPickLocation,
  } = useGeocode();

  useEffect(() => {
    const getHospital = async (initialCenter, map) => {
      try {
        const response = await api.get(
          `/hospital/nearest?longitude=${initialCenter.longitude}&latitude=${initialCenter.latitude}`
        );
        setHospital(response.data.data);
        const data = toGeoJSON(response.data.data);
        addMarkers(map, data);
      } catch (error) {
        console.log(error.response);
      }
    };

    let initialCenter = {
      longitude: '107.6081381',
      latitude: '-6.903363',
    };

    if (router.query && router.query.lat && router.query.long) {
      initialCenter = {
        latitude: `${router.query.lat}`,
        longitude: `${router.query.long}`,
      };
    }

    if (router.query && router.query.search) {
      setSearch(`${router.query.search}`);
    }

    const map = initializeMap(mapContainerRef, initialCenter);
    draggableMarker(map, initialCenter);
    getHospital(initialCenter, map);

    mapRef.current = map;
    // markerRef.current = marker;

    return () => {
      map.remove();
      // marker.remove();
    };
  }, [router]);

  useEffect(() => {
    if (mapRef && pickedLocation && pickedLocation.place_name) {
      const [long, lat] = pickedLocation.center;
      setSearch(pickedLocation.place_name);
      flyTo(mapRef.current, pickedLocation.geometry.coordinates);
      router.replace(
        `/faskes?lat=${lat}&long=${long}&search=${pickedLocation.place_name}`
      );
    }
  }, [pickedLocation]);

  const onPick = (place) => {
    setPickLocation(place);
  };

  return (
    <div className='h-full flex flex-col lg:flex-row lg:container mx-auto'>
      <div className='flex-1 order-first lg:order-last lg:ml-24'>
        <div className='h-72 lg:h-map lg:top-16 lg:sticky flex items-center justify-center'>
          <div
            ref={mapContainerRef}
            className='w-full h-full lg:h-4/5 flex-1 rounded-lg shadow-lg'
          ></div>
        </div>
      </div>
      <div className='h-full relative px-3 lg:py-24 lg:px-0 flex-1 bg-white flex flex-col'>
        <h2 className='mb-12 font-bold text-3xl order-2 lg:order-1 lg:mb-8'>
          Cari lokasi tes di sekitarmu
        </h2>
        <div className='relative mb-6 lg:mb-24 z-20 order-1 lg:order-2'>
          <div className='bg-white shadow-lg pr-4 pl-6 py-3 rounded-lg flex transform lg:transform-none -translate-y-1/2'>
            <TextInput
              type='text'
              placeholder='Masukan Lokasi'
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
              type='primary'
              className='text-white font-bold'
              icon={<Image src='/icons/search.svg' width={18} height={18} />}
            />
          </div>

          <LocationList
            pickLocation={onPick}
            className='mx-auto'
            places={places}
          />
        </div>
        <div className='order-3'>
          {hospital && hospital.length > 0 ? (
            hospital.map(
              ({ id, name, facilies, address, distance, thumbnail }) => (
                <FaskesItem
                  key={id}
                  id={id}
                  name={name}
                  address={address}
                  facilies={facilies}
                  distance={distance}
                  thumbnail={thumbnail}
                />
              )
            )
          ) : (
            <div className='w-full flex flex-col items-center justify-center'>
              <Image
                src='/images/hanzo_nonburik.svg'
                width={241}
                height={218}
              />
              <p className='mt-6 text-gray-400'>
                Wah lokasi yang kamu cari tidak ditemukan
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FaskesSection;
