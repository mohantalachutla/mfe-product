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

export const orderProducts = ({ items, address } = {}) => {
  return httpClient.post('/api/order', {
    items,
    address,
  });
};

export const addToCart = ({ items, archivedItems } = {}) => {
  return httpClient.post('/api/cart', {
    items,
    archivedItems,
  });
};

export const addToWishlist = ({ items } = {}) => {
  return httpClient.post('/api/wishlist', {
    items,
  });
};
