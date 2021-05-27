import http from '../http';

export const getUserList = (p) => {
  return http.get('/api/user-list', p);
};
