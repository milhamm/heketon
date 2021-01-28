import axios from 'axios';

const resources = {};

const makeRequestCreator = () => {
  let cancel;

  return async (query) => {
    // Check if we made a request
    if (cancel) {
      // Cancel the previous request before making a new request
      cancel.cancel();
    }
    // Create a new CancelToken
    cancel = axios.CancelToken.source();
    try {
      if (resources[query]) {
        // Return result if it exists
        return resources[query];
      }

      const res = await axios(query, {
        cancelToken: cancel.token,
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
