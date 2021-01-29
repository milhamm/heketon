import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import TextInput from '@components/Form/TextInput';
import Button from '@components/Button';
import LocationList from '@components/LocationList';
import { mockgeoJSON } from '@lib/constants';
import { addMarkers, draggableMarker, flyTo, initializeMap } from '@lib/mapbox';
import useLocation from '@hooks/useLocation';
import useGeocode from '@hooks/useGeocode';
import FaskesItem from './FaskesItem';

const FaskesSection = () => {
  const [search, setSearch] = useState('');
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
    const map = initializeMap(mapContainerRef, {});
    const marker = draggableMarker(map, location);

    addMarkers(map, mockgeoJSON);

    mapRef.current = map;
    markerRef.current = marker;

    return () => {
      map.remove();
      marker.remove();
    };
  }, []);

  useEffect(() => {
    if (mapRef && pickedLocation && pickedLocation.place_name) {
      setSearch(pickedLocation.place_name);
      flyTo(
        mapRef.current,
        pickedLocation.geometry.coordinates,
        markerRef.current
      );
    }
  }, [pickedLocation]);

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
          Faskes di sekitarmu
        </h2>
        <div className='relative mb-6 lg:mb-24 z-20 order-1 lg:order-2'>
          <div className='bg-white shadow-lg pr-4 py-3 rounded-lg flex transform lg:transform-none -translate-y-1/2'>
            <TextInput
              type='text'
              placeholder='Masukan Lokasi'
              onChange={(e) => {
                searchLocations(e);
                setSearch(e.target.value);
              }}
              value={search}
            />
            <Button
              type='primary'
              className='text-white font-bold'
              icon={<Image src='/icons/search.svg' width={18} height={18} />}
            />
          </div>
          <LocationList
            pickLocation={setPickLocation}
            className='mx-auto'
            places={places}
          />
        </div>
        <div className='order-3 '>
          <FaskesItem />
          <FaskesItem />
          <FaskesItem />
          <FaskesItem />
        </div>
      </div>
    </div>
  );
};

export default FaskesSection;
