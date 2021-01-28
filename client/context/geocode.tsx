import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { search } from '@lib/utils';

type GeocodeTypes = {
  places: Array<any>;
  searchLocations: Function;
};

const GeocodeContext = createContext<GeocodeTypes>({
  places: null,
  searchLocations: () => null,
});

export const GeocodeProvider = ({ children }) => {
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

  return (
    <GeocodeContext.Provider
      value={{
        places: places,
        searchLocations,
      }}
    >
      {children}
    </GeocodeContext.Provider>
  );
};

export const useGeocode = () => useContext(GeocodeContext);
