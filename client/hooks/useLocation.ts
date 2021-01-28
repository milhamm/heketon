import React, { useEffect, useState } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState(null);

  const onSuccessGetLocation = (position) => {
    const longitude = position.coords.longitude;
    const latitude = position.coords.latitude;

    console.log(position);

    setLocation({ longitude, latitude });
  };

  const onError = () => {
    console.log('Unable to retreive Location');
  };

  useEffect(() => {
    if (!navigator.geolocation) {
    } else {
      navigator.geolocation.getCurrentPosition(onSuccessGetLocation, onError, {
        enableHighAccuracy: true,
      });
    }
  }, []);

  return location;
};

export default useLocation;
