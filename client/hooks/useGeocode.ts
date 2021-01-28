import React, { useState } from 'react';
import { search } from '@lib/utils';

const useGeocode = () => {
  const [places, setPlaces] = useState(null);

  const searchLocations = async (e) => {
    if (e.target.value !== '') {
      const data = await search(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?access_token=pk.eyJ1IjoiYnVrYW5hdmF0YXIiLCJhIjoiY2pwY2RnZzBtMGthMzNwcDhkYTluOTJkeCJ9.NEHAspoFr-xidb-xlTj7aQ&country=ID`
      );
      if (data && data.features) {
        setPlaces(data.features);
      }
    } else {
      setPlaces(null);
    }
  };

  return {
    places,
    searchLocations,
  };
};

export default useGeocode;
