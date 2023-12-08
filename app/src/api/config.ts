import axios from "axios"

const BASE_URL = "http://localhost:5000/user"

// Set config defaults when creating the instance
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
})
