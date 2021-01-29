import axios from 'axios';

const resources = {};

const makeRequestCreator = () => {
  let token;

  return async (query) => {
    if (token) {
      token.cancel();
    }
    token = axios.CancelToken.source();
    try {
      if (resources[query]) {
        return resources[query];
      }

      const res = await axios(query, {
        cancelToken: token.token,
      });
      const result = res.data;
      resources[query] = result;
      return result;
    } catch (error) {
      if (axios.isCancel(error)) {
      } else {
      }
    }
  };
};

export const search = makeRequestCreator();
