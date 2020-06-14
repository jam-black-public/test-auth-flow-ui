import axios, { AxiosResponse } from 'axios';
import { getBaseUrl } from './url';
import { getToken } from './localStorage';

const instance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use((config) => {
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: getToken()
    }
  };
});

instance.interceptors.response.use(
  (res: AxiosResponse) => res,
  ({ response }) => {
    return Promise.reject({
      error: response ? response.data : 'Bad request'
    });
  }
);

export default instance;
