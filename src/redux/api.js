import axios from 'axios';
import Cookies from 'js-cookie';

// for live server
const API = axios.create({
  baseURL: 'https://fanstar-backend.herokuapp.com',
});

API.interceptors.request.use((req) => {
  if (Cookies.get('fanstarAdmin')) {
    req.headers['authorization'] = `Bearer ${Cookies.get('fanstarAdmin')}`;
  }
  return req;
});

export const login = (loginData) =>
  API.post('/api/admin/public/login', loginData);

export const appVisits = () => API.get('/api/admin/private/gettotalappvisits');
export const totalSubscriptions = () =>
  API.get('/api/admin/private/gettotalsubscribers');

// Artists
export const getArtistList = () =>
  API.get('/api/admin/private/getlistofartists');
export const createArtist = (formData) =>
  API.post('/api/admin/private/createartist', formData);
export const getAnArtist = (id) =>
  API.get(`/api/admin/private/getanartist/${id}`);
export const getArtistsOfAnEmployee = (id) =>
  API.get(`/api/admin/private/getartistsofanemployee/${id}`);

export const totalAndPendingOrdersForArtist = (id) =>
  API.get(`/api/admin/private/getordersofartist/${id}`);

export const allPaymentForArtist = (id) =>
  API.get(`/api/admin/private/getpayments/${id}`);

export const blockAndUnBlockArtist = (id) =>
  API.put('/api/admin/private/blockunblockartist', { artistId: id });

export const deleteAnArtist = (id) =>
  API.delete(`/api/admin/private/deleteanartist/${id}`);

export const EditArtist = (id) =>
  API.get(`/api/admin/private/generatetokenofanartist/${id}`);

// Employee
export const getEmployeeList = () =>
  API.get('/api/admin/private/getlistofemployees');
export const getAnEmployee = (id) =>
  API.get(`/api/admin/private/getanemployee/${id}`);

export const createEmployee = (formData) =>
  API.post('/api/admin/private/createemployee', formData);

export const blockAndUnBlockEmployee = (id) =>
  API.put('/api/admin/private/blockunblockemployee', { employeeId: id });

export const deleteAnEmployee = (id) =>
  API.delete(`/api/admin/private/deleteanemployee/${id}`);

export const getUserList = () => API.get('/api/admin/private/getallusers');
export const getPaymentList = () =>
  API.get('/api/admin/private/getallpayments');
