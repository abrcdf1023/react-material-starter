import axios from 'axios';
import queryString from 'query-string';

const fetcher = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});
export const fetchGetUsers = payload =>
  fetcher.get(`/users?${queryString.stringify(payload)}`);
