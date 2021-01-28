import React, { useEffect } from 'react';
import Image from 'next/image';
import initializeMap from '@lib/mapbox';
import useLocation from 'hooks/useLocation';
import TextInput from '@components/Form/TextInput';
import Button from '@components/Button';
import { mockgeoJSON } from '@lib/constants';
import LocationList from '@components/LocationList';
import { useGeocode } from 'context/geocode';

const CariSection = () => {
  const location = useLocation();
  const { places, searchLocations } = useGeocode();

  useEffect(() => {
    const map = initializeMap(location);

    map.on('load', function () {
      // Add an image to use as a custom marker
      map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        function (error, image) {
          if (error) throw error;
          map.addImage('custom-marker', image);
          // Add a GeoJSON source with 2 points
          map.addSource('points', {
            type: 'geojson',
            data: mockgeoJSON,
          });

          // Add a symbol layer
          map.addLayer({
            id: 'points',
            type: 'symbol',
            source: 'points',
            layout: {
              'icon-image': 'custom-marker',
              // get the title name from the source's "title" property
              'text-field': ['get', 'title'],
              'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
              'text-offset': [0, 1.25],
              'text-anchor': 'top',
            },
          });
        }
      );
    });
  }, [location]);

  return (
    <>
      <div id='map' className='w-full h-96'></div>
      <div className='container mx-auto h-96 relative z-20 px-3 lg:px-0'>
        <div
          className='relative max-w-3xl w-full mx-auto'
          style={{ transform: 'translateY(-50%)' }}
        >
          <div className='bg-white shadow-lg pr-4 py-3  rounded-lg flex'>
            <TextInput
              type='text'
              placeholder='Masukan Lokasi'
              onChange={searchLocations}
            />
            <Button
              type='primary'
              className='text-white font-bold'
              icon={<Image src='/icons/search.svg' width={18} height={18} />}
            />
          </div>
          <LocationList className='mx-auto' places={places} />
        </div>
      </div>
    </>
  );
};

export default CariSection;
