import axios from 'axios';
import ENV from 'react-native-config';
import strings from '_localization';

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Authorization: ENV.API_TOKEN,
  },
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      throw new Error(strings.network.connectionError);
    }
    const errorToPrint = error?.response?.data ?? error;
    console.warn(error);
    return Promise.reject(errorToPrint);
  },
);

const setAuthorization = (token) => {
  client.defaults.headers.common.authorization = token;
};

export default { ...client, setAuthorization };
