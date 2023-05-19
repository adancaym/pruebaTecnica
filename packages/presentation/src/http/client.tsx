import axios from 'axios';
import { constants } from '../constants';

export const brandingService = axios.create({
  baseURL: constants.apiUrl + '/branding',
  headers: {
    'Content-Type': 'application/json',
  },
});
export const authService = axios.create({
  baseURL: constants.apiUrl + '/auth',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const providersService = axios.create({
  baseURL: constants.apiUrl + '/providers',
  headers: {
    'Content-Type': 'application/json',
  },
});
