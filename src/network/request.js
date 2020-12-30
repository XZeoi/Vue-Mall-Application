import axios from 'axios'

export function request(config) {
  //1、创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/w6',
    timeout: 5000
  })

  //2、axios拦截器
  //  2.1 请求拦截器
  instance.interceptors.request.use(config => {
    //...补充需要添加的配置

    //请求成功拦截结束，把请求发送出去
    return config
  }, err => {
    //...补充请求失败拦截处理
  })

  //  2.2 响应拦截器
  instance.interceptors.response.use(res => {
    //...处理成功响应拦截

    //...处理完，把成功响应拦截放出去，一般是过滤掉无用信息，只返回后台API提供的数据
    return res.data
  }, err => {
    //...补充失败响应拦截处理
  })

  return instance(config)
}