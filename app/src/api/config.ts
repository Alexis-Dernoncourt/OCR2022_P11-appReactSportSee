import axios from "axios"
// import user12_data from "./mock/user-12/user.mock.json"

const BASE_URL = "http://localhost:5000/user"
// console.log("MOCKED-DATA:", user12_data)

// Set config defaults when creating the instance
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

export const baseApiMock = (param: string) =>
  new Promise((resolve, reject) => {
    const user12_data = import("./mock/user-12/user.mock.json")
    const user12_activity_data = import("./mock/user-12/user-activity.mock.json")
    const user12_average_sessions_data = import("./mock/user-12/user-average-sessions.mock.json")
    const user12_performance_data = import("./mock/user-12/user-performance.mock.json")

    if (!user12_data) reject("Erreur API.")
    setTimeout(() => {
      switch (param) {
        case "performance":
          resolve(user12_performance_data)
          break
        case "average-sessions":
          resolve(user12_average_sessions_data)
          break
        case "activity":
          resolve(user12_activity_data)
          break
        case "user":
          resolve(user12_data)
          break

        default:
          console.log(param)
          break
      }
    }, 1000)
  })
