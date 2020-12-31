/**
 * 管理整个首页的所有请求
 */

import {request} from './request'

export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomeData(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}