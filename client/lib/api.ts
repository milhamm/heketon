import axios from 'axios';

const BASE_URL = 'http://178.128.25.31:8080/api';

export default axios.create({
  baseURL: BASE_URL,
});
