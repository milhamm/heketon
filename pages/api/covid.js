// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';
import NextCors from 'nextjs-cors';

export default async (req, res) => {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  const data = await axios.get('https://api.kawalcorona.com/indonesia');
  res.statusCode = 200;
  res.json(data.data);
  res.end();
};
