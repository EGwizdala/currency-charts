import axios from 'axios';

export const request = axios.create({
  baseURL: 'http://api.nbp.pl/api/exchangerates/rates',
});

export default request;