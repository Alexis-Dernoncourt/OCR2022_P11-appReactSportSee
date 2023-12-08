import React, { useEffect, useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { axiosInstance } from "./api/config"
import { User } from "../types/index"
import { useParams } from "react-router-dom"
import Spinner from "./components/Spinner"
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
      const request = await axiosInstance.request({ url: `/${params.userId}`, method: "get" })
      const result = await request.data
      return result.data
    } catch (error) {
      console.log("Err:", error)
    }
  }

  useEffect(() => {
    fetchUser12()
      .then((data) => {
        setTimeout(() => {
          setData(data)
        }, 5000)
      })
      .catch((e) => {
        setError(e)
      })
  }, [])

  return (
    <div className="App">
      <>
        {!data ? (
          <Spinner />
        ) : (
          <header className="App-header">
            {error && <div>Error: {error.message}</div>}
            <div>
              {data?.userInfos.firstName} {data?.userInfos.lastName} - age: {data?.userInfos.age}
            </div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
          </header>
        )}
      </>
    </div>
  )
}

export default App
