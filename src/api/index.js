import httpClient from '../utils/httpClient';

export const hello = () => {
  return httpClient.get('/api/hello');
};
export const getProducts = ({ name, type, subtype, status }) => {
  return httpClient.post('/api/product/browse', {
    name,
    type,
    subtype,
    status,
  });
};

export const getProduct = ({ name, type, subtype, status }) => {
  return httpClient.get('/api/product', {
    name,
    type,
    subtype,
    status,
  });
};

export const changeStatus = ({ _id, status }) => {
  return httpClient.post('/api/product', {
    _id,
    status,
  });
};
