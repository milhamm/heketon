import mapboxgl from 'mapbox-gl';

const initializeMap = (location) => {
  const longitude = location && location.longitude ? location.longitude : 0;
  const latitude = location && location.latitude ? location.latitude : 0;

  console.log(longitude, latitude);

  mapboxgl.accessToken =
    'pk.eyJ1IjoiYnVrYW5hdmF0YXIiLCJhIjoiY2pwY2RnZzBtMGthMzNwcDhkYTluOTJkeCJ9.NEHAspoFr-xidb-xlTj7aQ';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 13,
  });

  return map;
};

export default initializeMap;
