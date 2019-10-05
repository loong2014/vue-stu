import axios from 'axios'
import qs from 'qs'

const http = axios.create({
    timeout: 1000 * 10,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

// 请求拦截器
http.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
})


// 响应拦截器
http.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
})

//返回一个Promise(发送get请求)
export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: param })
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

//返回一个Promise(发送post请求)
export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
export default {
    fetchPost,
    fetchGet
}