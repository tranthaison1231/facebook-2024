import axios from 'axios'
import configs from '@/core/configs/configs'
import { getToken, removeToken } from './token'

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

request.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      removeToken()
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

export default request
