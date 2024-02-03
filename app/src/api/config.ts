import axios from "axios"
// import user12_data from "./mock/user-12/user.mock.json"

const BASE_URL = "http://localhost:5000/user"
// console.log("MOCKED-DATA:", user12_data)

// Set config defaults when creating the instance
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

export const baseApiMock = ({ id, param }: { id: number; param: string }) =>
  new Promise((resolve, reject) => {
    const user_data = import(`./mock/user-${id}/${param === "user" ? param : "user-" + param}.mock.json`)
    if (!user_data) reject("Erreur API.")
    setTimeout(() => {
      resolve(user_data)
    }, 500)
  })
