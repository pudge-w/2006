import http from './http'

// 首页的最受欢迎接口
export function getTopRated(params) {
  return http.get('http://www.pudge.wang:3002/api/home/topRatedMovies', params)
}

// 其他接口
// export function...