import Axios from "axios";

export const axios = Axios.create({
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

axios.interceptors.response.use(
  (response) => {
    const { data } = response;
    return data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
