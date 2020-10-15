import request from '@/utils/request'

// 查询定时任务调度列表
export function getTheme(query) {
  return request({
    url: '/getTheme',
    method: 'get',
  })
}

export function getConfigInfo(query) {
  return request({
    url: '/getConfigInfo',
    method: 'get',
  })
}