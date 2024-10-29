import axios from 'axios';

const API_URL = 'https://webapi.developers.erstegroup.com/api/csas/public/sandbox/v2/rates/exchangerates';
const API_KEY = 'c52a0682-4806-4903-828f-6cc66508329e';

export const fetchExchangeRates = () => {
  return axios.get(`${API_URL}?web-api-key=${API_KEY}`);
};