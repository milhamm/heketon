import React from 'react';

type LocationListTypes = {
  places: Array<any>;
  className?: string;
  pickLocation?: Function;
};

const LocationItem = ({ name, onClick }) => (
  <div
    className='w-full px-3 py-4 rounded-lg hover:bg-gray-100 cursor-pointer'
    onClick={onClick}
  >
    <span className='text-sm'>{name}</span>
  </div>
);

const LocationList = ({
  places,
  className,
  pickLocation,
}: LocationListTypes) => {
  return (
    <div
      className={`${className} ${
        !places && 'hidden'
      } bg-white shadow-lg absolute w-full max-w-3xl mt-2 rounded-lg px-3 py-3 z-10 max-h-64 overflow-auto`}
    >
      {places &&
        places.map((place) => (
          <LocationItem
            onClick={() => {
              // console.log(pickLocation);
              pickLocation(place);
            }}
            key={place.id}
            name={place.place_name}
          />
        ))}
    </div>
  );
};

export default LocationList;
