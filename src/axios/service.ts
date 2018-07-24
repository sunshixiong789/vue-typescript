import axios from "axios";
import {Message, MessageBox} from "element-ui";

/** 创建axios实例 */
const service = axios.create({
  timeout: 15000 // 请求超时时间
});
/** request拦截器 */
service.interceptors.request.use((config) => {
  return config;
}, (error) => {
  // 遇到错误或者超时
  Message({
    message: '请求超时!',
    type: 'error',
    center: true
  });
  Promise.reject(error);
});
/**
 *  respone 拦截器
 */
service.interceptors.response.use(
    (response) => {
      /**
       * code为非20000是抛错 可结合自己业务进行修改
       */
      const res = response;
      if (res.status !== 200) {
        Message({
          message: '服务器错误',
          type: 'error',
          duration: 5 * 1000
        });
        return Promise.reject(new Error('error'));
      } else {
        return response;
      }
    },
    (error) => {
      if (error.response.status === 504 || error.response.status === 404) {
        Message({message: '服务器被吃了⊙﹏⊙∥', type: 'error'});
      } else {
        Message({message: '权限不足,请联系管理员!', type: 'error'});
      }
      return Promise.reject(error);
    }
);
export default service;
