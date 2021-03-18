// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios';

export default (req, res) => {
  axios.get('https://api.kawalcorona.com/indonesia').then((data) => {
    res.statusCode = 200;
    res.json(data.data);
  });
};
