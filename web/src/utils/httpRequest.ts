import axios from 'axios'
import configs from '@/configs/configs'

const httpRequest = axios.create({
  baseURL: configs.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
export default httpRequest
