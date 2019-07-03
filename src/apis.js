import axios from 'axios';
import queryString from 'query-string';

const fetcher = axios.create({
  baseURL: 'https://reqres.in/api',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

// 錯誤 log
export const fetchPostLogs = payload => fetcher.post('/logs', payload);

export const fetchGetUsers = payload =>
  fetcher.get(`/users?${queryString.stringify(payload)}`);
