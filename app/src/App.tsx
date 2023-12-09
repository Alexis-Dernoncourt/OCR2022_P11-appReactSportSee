import React, { useEffect, useState } from "react"
import "./App.scss"
import { baseApiMock } from "./api/config"
import { User } from "../types/index"
import { useParams } from "react-router-dom"
import Spinner from "./components/Spinner"
import Header from "./components/Header/Header"
import SideNav from "./components/SideNav/SideNav"
// import { useWidowFocus } from "./hooks"

type UserID = {
  userId?: string
}

function App() {
  const [data, setData] = useState<User | null>(null)
  const [error, setError] = useState<any>(null)
  const params = useParams<UserID>()

  // const { state }: any = useWidowFocus()

  async function fetchUser12() {
    if (!params.userId) throw Error("Id is missing!")
    try {
      // const request = await axiosInstance.request({ url: `/${params.userId}`, method: "get" })
      const request: any = await baseApiMock
      const result = await request.data
      console.log("RESULT=>", result)

      return result
    } catch (error) {
      console.log("Err:", error)
    }
  }

  useEffect(() => {
    fetchUser12()
      .then((data) => {
        setData(data)
      })
      .catch((e) => {
        setError(e)
      })
  }, [])

  return (
    <div className="app">
      <>
        {!data ? (
          <Spinner />
        ) : (
          <>
            <Header />
            <div className="app-container">
              <main className="app-content">
                <SideNav />
                <div className="app-content-container">
                  {error && <div>Error: {error.message}</div>}
                  <div>
                    {data?.userInfos.firstName} {data?.userInfos.lastName} - age: {data?.userInfos.age}
                  </div>
                  <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                  </p>
                </div>
              </main>
            </div>
          </>
        )}
      </>
    </div>
  )
}

export default App
