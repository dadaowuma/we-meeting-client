/**
 * 管理网络请求相关内容
 */

import axios from 'axios';

import {api_base_url} from '../config';

const network = axios.create({
  baseURL: api_base_url,
  timeout: 1000,
  headers: {
    'X-client-name': 'WeMeeting'
  }
});

network.interceptors.request.use(function (config) {
  /**
   * 此处在请求发起之前，可做一些个性化配置
   * 例如：配置token
   */
  return config;
}, function (error) {
  return Promise.reject(error);
});

network.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default network;