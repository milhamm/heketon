import axios from 'axios';

const BASE_URL = 'https://play-tictactoe.xyz/api';

export default axios.create({
  baseURL: BASE_URL,
});
