import axios,{AxiosRequestConfig,AxiosResponse} from 'axios'

// import {config} from 'process'

class Http{
    private defaultConfig = {
        timeout:5000,
        baseUrl:''
    }
    private axiosInstance = axios.create(this.defaultConfig)
    constructor(){
        this.httpInterceptorsRequest()
        this.httpInterceptorsResponse()
    }
    private httpInterceptorsRequest(){
        this.axiosInstance.interceptors.request.use((config:AxiosRequestConfig|any)=>{
            return config
        },err =>{
            return Promise.reject(err)
        })
    }
    private httpInterceptorsResponse(){
        this.axiosInstance.interceptors.response.use((response:AxiosResponse)=>{
            return response
        },err =>{
            return Promise.reject(err)
        })
    }
    httpRequestGet<T>(url:string, params:AxiosRequestConfig ):Promise<T>{
        return this.axiosInstance.get(url,params).then(res=>res.data).catch()
    }
    httpRequestPost<T>(url:string, params:AxiosRequestConfig ):Promise<T>{
        return this.axiosInstance.post(url,params).then(res=>res.data).catch()
    }
}
export default new Http()