import axios from 'axios'
import configs from '@/configs/configs'
import { getToken } from './token'

const request = axios.create({
  baseURL: configs.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

request.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
