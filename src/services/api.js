import axios from 'axios';
import config from '../config/index';

export const api = axios.create({
  baseURL: config.apiBaseUrl,
});
