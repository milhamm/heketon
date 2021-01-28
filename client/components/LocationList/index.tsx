import React from 'react';

const LocationItem = ({ name }) => (
  <div className='w-full px-3 py-4 rounded-lg hover:bg-gray-100 cursor-pointer'>
    <span className='text-sm'>{name}</span>
  </div>
);

const LocationList = ({ places, className }) => {
  return (
    <div
      className={`${className} ${
        !places && 'hidden'
      } bg-white shadow-lg absolute w-full max-w-3xl mt-2 rounded-lg px-3 py-3 z-10 max-h-64 overflow-auto`}
    >
      {places &&
        places.map((place) => (
          <LocationItem key={place.id} name={place.place_name} />
        ))}
    </div>
  );
};

export default LocationList;
