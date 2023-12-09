import axios from "axios"
import user12_data from "./mock/user-12/user.mock.json"

const BASE_URL = "http://localhost:5000/user"
console.log("MOCKED-DATA:", user12_data)

// Set config defaults when creating the instance
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

export const baseApiMock = new Promise((resolve, reject) => {
  if (!user12_data) reject("Erreur API.")
  setTimeout(() => {
    resolve(user12_data)
  }, 4000)
})
