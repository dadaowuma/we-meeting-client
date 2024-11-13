/**
 * 管理网络请求相关内容
 */

import axios from 'axios';

import {api_host} from '../config';

const instance = axios.create({
  baseURL: api_host,
  timeout: 1000,
  headers: {
    'X-client-name': 'WeMeeting'
  }
});

instance.interceptors.request.use(function (config) {
  /**
   * 此处在请求发起之前，可做一些个性化配置
   * 例如：配置token
   */
  return config;
}, function (error) {
  return Promise.reject(error);
});

instance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default instance;