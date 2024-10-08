import axios from 'axios'
import configs from '@/core/configs/configs'
import { getToken, removeToken } from './token'

const request = axios.create({
  baseURL: configs.API_URL + '/api',
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
  async error => {
    if (error.response.status === 401) {
      try {
        const response = await request.post('/refresh-token')
        console.log(response)
      } catch (error) {
        console.error(error)
        removeToken()
        window.location.reload()
      }
    }
    return Promise.reject(error)
  }
)

export default request
