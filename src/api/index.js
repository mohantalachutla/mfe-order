import httpClient from '../utils/httpClient';

export const hello = () => {
  return httpClient.get('/api/hello');
};

export const getOrders = ({ status }) => {
  return httpClient.post('/api/order/browse', { status });
};

export const updateStatus = ({ _id, status }) => {
  return httpClient.put('/api/order/changeStatus', { _id, status });
};
