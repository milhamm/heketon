import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import TextInput from '@components/Form/TextInput';
import Button from '@components/Button';
import LocationList from '@components/LocationList';
import { mockgeoJSON } from '@lib/constants';
import { addMarkers, draggableMarker, flyTo, initializeMap } from '@lib/mapbox';
import useLocation from '@hooks/useLocation';
import useGeocode from '@hooks/useGeocode';

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
    <>
      <div ref={mapContainerRef} className='w-full h-96'></div>
      <div className='container mx-auto h-96 relative z-20 px-3 lg:px-0'>
        <div
          className='relative max-w-3xl w-full mx-auto'
          style={{ transform: 'translateY(-50%)' }}
        >
          <div className='bg-white shadow-lg pr-4 py-3  rounded-lg flex'>
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
      </div>
    </>
  );
};

export default FaskesSection;
