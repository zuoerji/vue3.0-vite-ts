import axios from 'axios'

import {config} from 'process'

const defaultConfig = {
    timeout:5000,
    baseUrl:''
}

const axiosInstance = axios.create(defaultConfig)

axiosInstance.interceptors.request.use(config=>{
    return config
},err =>{
    return Promise.reject(err)
})


// 封装请求
// get
const httpRequestGet = (url:string, params:any )=>{
    return axiosInstance.get(url,params).then(res=>res.data).catch()
}

// post
const httpRequestPost = (url:string, params:any )=>{
    return axiosInstance.post(url,params).then(res=>res.data).catch()
}


export default {
    httpRequestGet,
    httpRequestPost
}