import mapboxgl from 'mapbox-gl';

export const initializeMap = (container, location) => {
  const longitude =
    location && location.longitude ? location.longitude : 107.6081381;
  const latitude =
    location && location.latitude ? location.latitude : -6.903363;

  // console.log(longitude, latitude);

  mapboxgl.accessToken =
    'pk.eyJ1IjoiYnVrYW5hdmF0YXIiLCJhIjoiY2pwY2RnZzBtMGthMzNwcDhkYTluOTJkeCJ9.NEHAspoFr-xidb-xlTj7aQ';

  const map = new mapboxgl.Map({
    container: container.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 11,
  });

  return map;
};

export const addMarkers = (map, data) => {
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
          data: data,
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
};

export const flyTo = (map, coordinates, marker?) => {
  map.flyTo({
    center: coordinates,
    essential: true,
  });

  marker.setLngLat(coordinates);
};

export const draggableMarker = (map, location) => {
  const longitude =
    location && location.longitude ? location.longitude : 107.6081381;
  const latitude =
    location && location.latitude ? location.latitude : -6.903363;

  return new mapboxgl.Marker({
    draggable: true,
  })
    .setLngLat([longitude, latitude])
    .addTo(map);
};
