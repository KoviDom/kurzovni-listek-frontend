import axios from 'axios';

const API_URL = 'https://kurzovnilistek.onrender.com/api/exchangerates';

export const fetchExchangeRates = (useDatabase = false) => {
  return axios.get(`${API_URL}?useDatabase=${useDatabase}`);
};