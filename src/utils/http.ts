import axios from 'axios'
import { showToast } from 'vant'
import { useUserStore } from '@/stores/user'
const store = useUserStore()

const http = axios.create({
  baseURL: 'http://demonuxtapi.dishait.cn/mobile/',
  timeout: 10000
})

http.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    config.headers.Appid = 'bd9d01ecc75dbbaaefce'
    config.headers.token = store.user.token
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  (response) => {
    // Do something before response is sent
    return response
  },
  (error) => {
    // Do something with response error
    // console.log(error.response.data);
    if (error.response.data.msg == 'fail') return showToast(error.response.data.data)
    return Promise.reject(error)
  }
)

export default http
