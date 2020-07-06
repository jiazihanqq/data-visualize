import Axios, { AxiosResponse } from "axios";

export const axios = Axios.create({
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
