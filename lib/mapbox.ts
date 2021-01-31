import mapboxgl from 'mapbox-gl';

export const initializeMap = (container, location) => {
  const longitude =
    location && location.longitude ? location.longitude : 107.6081381;
  const latitude =
    location && location.latitude ? location.latitude : -6.903363;

  mapboxgl.accessToken =
    'pk.eyJ1IjoiYnVrYW5hdmF0YXIiLCJhIjoiY2pwY2RnZzBtMGthMzNwcDhkYTluOTJkeCJ9.NEHAspoFr-xidb-xlTj7aQ';

  const map = new mapboxgl.Map({
    container: container.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 12,
  });

  return map;
};

export const addMarkers = (map, data) => {
  map.on('load', function () {
    // Add an image to use as a custom marker
    map.loadImage('https://i.imgur.com/jElNyiO.png', function (error, image) {
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
          'icon-allow-overlap': true,
        },
      });
    });
  });

  const popup = new mapboxgl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  map.on('mouseenter', 'points', function (e) {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = 'pointer';

    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });

  map.on('mouseleave', 'points', function () {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });
};

export const flyTo = (map, coordinates, marker?) => {
  map.flyTo({
    center: coordinates,
    essential: true,
  });

  map.getSource('source_circle_500').setData({
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: coordinates,
        },
      },
    ],
  });
};

const metersToPixelsAtMaxZoom = (meters, latitude) =>
  meters / 0.075 / Math.cos((latitude * Math.PI) / 180);

export const draggableMarker = (map, location) => {
  const longitude =
    location && location.longitude ? location.longitude : 107.6081381;
  const latitude =
    location && location.latitude ? location.latitude : -6.903363;

  map.on('load', () => {
    map.addSource('source_circle_500', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [longitude, latitude],
            },
          },
        ],
      },
    });

    map.addLayer({
      id: 'circle500',
      type: 'circle',
      source: 'source_circle_500',
      paint: {
        'circle-radius': {
          stops: [
            [0, 0],
            [20, metersToPixelsAtMaxZoom(5000, latitude)],
          ],
          base: 2,
        },
        'circle-color': '#5b94c6',
        'circle-opacity': 0.3,
      },
    });
  });
};
