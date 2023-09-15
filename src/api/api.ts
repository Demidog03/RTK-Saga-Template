import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

api.interceptors.response.use(undefined, async (error) => {
  if (axios.isAxiosError(error) && error){
    console.log(error)
  }
  return await Promise.reject(error)
})
