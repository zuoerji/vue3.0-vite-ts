
// http://apis.juhe.cn/simpleWeather/query city


import http from '../utils/http'

export function getWeatcher(){
    return http.httpRequestGet('api/simpleWeather/query',{ city:'广州',key:'' })
}