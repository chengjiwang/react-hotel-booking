import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://challenge.thef2e.com/api/thef2e2019/stage6/',
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const apiGetAllRooms = () => apiClient.get('/rooms');
export const apiGetRoom = id => apiClient.get(`/room/${id}`);
export const apiBookingRoom = (id, data) => apiClient.post(`/room/${id}`, data);
export const apiClearReservation = () => apiClient.delete('/rooms');