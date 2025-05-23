import axios from 'axios'

const axiosPrivate = axios.create({
  baseURL: 'https://localhost:7113/api',
  headers: { 'Content-Type': 'application/json' }
})

axiosPrivate.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default axiosPrivate