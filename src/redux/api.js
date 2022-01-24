import axios from 'axios';
import Cookies from 'js-cookie';

// for live server
const API = axios.create({
  baseURL: 'https://fanstar-backend.herokuapp.com/',
});

API.interceptors.request.use((req) => {
  if (Cookies.get('fanstarAdmin')) {
    req.headers['authorization'] = `Bearer ${Cookies.get('fanstarAdmin')}`;
  }
  return req;
});

export const login = (loginData) =>
  API.post('/api/admin/public/login', loginData);

export const getArtistList = () => API.get('/api/admin/private/getallartists');
export const createArtist = (formData) =>
  API.post('/api/admin/private/createartist', formData);

export const getEmployeeList = () =>
  API.get('/api/admin/private/getallemployees');

export const createEmployee = (formData) =>
  API.post('/api/admin/private/createemployee', formData);

export const getUserList = () => API.get('/api/admin/private/getallusers');
