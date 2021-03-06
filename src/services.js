import axios from 'axios';

const url = 'http://localhost:8000';

const axiosInstance = axios.create({
  baseURL: url,
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = window.localStorage.token;
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  put(endpoint, body) {
    return axiosInstance.put(endpoint, body);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
  getAddress(cep) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
  },
  registerUser(body) {
    return axiosInstance.post(`/user/store`,body)
  },
  login(body) {
    return axiosInstance.post('/user/login',body)
  },
  getUserGyms(clientId) {
    return axiosInstance.get(`/user/${clientId}/gyms/`)
  }
};