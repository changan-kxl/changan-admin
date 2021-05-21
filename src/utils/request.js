import axios from 'axios';
import router from '../router';

const service = axios.create({
  // baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10000 // request timeout
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = '';
    // 如果有token 就携带tokon
    if (token) {
      config.headers['Authorization'] = 'Bearer__' + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截器
service.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log('准备跳到登录页');
    }
    return Promise.reject(error);
  }
);

export default service;
