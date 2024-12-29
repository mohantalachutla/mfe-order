import httpClient from '../utils/httpClient';

export const hello = () => {
  return httpClient.get('/api/hello');
};

export const getOrders = ({ status }) => {
  return httpClient.post('/api/order/browse', { status });
};
