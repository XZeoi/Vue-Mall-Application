/**
 * 管理整个首页的所有请求
 */

import {request} from './request'

export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}