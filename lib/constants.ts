export const flow = [
  {
    number: 1,
    image: '/images/flow/1.svg',
    caption: 'Cari Faskes atau Rumah Sakit terdekat dari tempatmu',
  },
  {
    number: 2,
    image: '/images/flow/2.svg',
    caption: 'Buat jadwal tes dengan Faskes atau Rumah Sakit terdekat',
  },
  {
    number: 3,
    image: '/images/flow/3.svg',
    caption:
      'Datang ke Faskes atau Rumah Sakit yang kamu pilih untuk melakukan tes',
  },
];

export const benefit = [
  {
    number: 1,
    image: '/images/benefit/1.svg',
    title: 'Cepat',
    caption: 'Tidak perlu antri, langsung tes hanya dengan mendaftar',
  },
  {
    number: 2,
    image: '/images/benefit/2.svg',
    title: 'Mudah',
    caption: 'Cari tes melalui gadgetmu tanpa perlu mengunduh aplikasi',
  },
  {
    number: 3,
    image: '/images/benefit/3.svg',
    title: 'Aman',
    caption: 'Buat janji dari rumahmu tanpa perlu keluar rumah',
  },
  {
    number: 4,
    image: '/images/benefit/4.svg',
    title: 'Multi Opsi',
    caption: 'Pilih tes yang diinginkan, PCR ataupun Rapid',
  },
];

export const mockgeoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [107.65640258789062, -6.965959973420071],
      },
    },
    {
      type: 'Feature',
      properties: {
        'marker-color': '#af4141',
        'marker-size': 'medium',
        'marker-symbol': '',
      },
      geometry: {
        type: 'Point',
        coordinates: [107.62825012207031, -6.936310440056612],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [107.56851196289062, -6.958121772992557],
      },
    },
  ],
};

export const toGeoJSON = (data) => {
  return {
    type: 'FeatureCollection',
    features: data.map(({ longitude, latitude, name, address }) => ({
      type: 'Feature',
      properties: {
        description: `<b>${name}</b><p>${address}</p>`,
      },
      geometry: {
        type: 'Point',
        coordinates: [
          Number.parseFloat(longitude),
          Number.parseFloat(latitude),
        ],
      },
    })),
  };
};

export const faq = [
  {
    title: 'Apakah kegunaan dari aplikasi ini?',
    description:
      'Aplikasi ini dapat membantumu untuk mencari lokasi tes covid terdekat dari lokasimu berada',
  },
  {
    title: 'Apakah aplikasi ini aman digunakan?',
    description:
      'Ya, tentu saja. Kami sangat menjaga keamanan dari aplikasi ini',
  },
  {
    title: 'Apakah data diri saya aman?',
    description:
      'Tentu saja, kami tidak akan menyebarkan data dirimu. Dan kami juga sangat menjaga keamanan dari data diri kamu',
  },
  {
    title: 'Bagaimana jika saya ingin melakukan tes di hari yang sama?',
    description:
      'Anda dapat melakukan tes kapanpun selama fasilitas kesehatan yang anda pilih (klinik ataupun rumah sakit), memiliki jadwal yang sama',
  },
  {
    title:
      'Jika saya sedang dinyatakan positif Covid-19, apakah saya dapat melakukan tes disini?',
    description:
      'Anda TIDAK dapat melakukan tes dengan website ini. Dikarenakan fasilitas kesehatan yang kami sediakan adalah fasilitas pencegahan Covid-19. Untuk selanjutnya, anda dapat menghubungi hotline Covid 119',
  },
  {
    title: 'Bagaimana setelah tes, saya terdeteksi positif?',
    description:
      'Anda dapat mengikuti arahan yang diberikan oleh fasilitas kesehatan tersebut',
  },
];
