/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react"
import "./App.scss"
import { axiosInstance, baseApiMock } from "./api/config"
import User from "./utils/userModelClass"
import { useParams } from "react-router-dom"
import Spinner from "./components/Spinner"
import Header from "./components/Header/Header"
import SideNav from "./components/SideNav/SideNav"
import Name from "./components/Name/Name"
import Activity from "./components/Activity/Activity"
import SessionDuration from "./components/SessionDuration/SessionDuration"
import UserPerfs from "./components/UserPerfs/UserPerfs"
import UserScoreAvg from "./components/UserScoreAvg/UserScoreAvg"
import UserInfosCards from "./components/UserInfosCards/UserInfosCards"

type UserID = {
  userId?: string
}

function App() {
  const [getUser, setUser] = useState()
  const [error, setError] = useState<any>(null)
  const params = useParams<UserID>()

  async function fetchUser12() {
    if (!params.userId) throw Error("Id is missing!")
    try {
      // const request = await axiosInstance.request({ url: `/${params.userId}`, method: "get" })
      // console.log("🚀 ~ fetchUser12 ~ request:", request)
      const request1: any = await baseApiMock({ id: Number(params.userId), param: "user" })
      const request2: any = await baseApiMock({ id: Number(params.userId), param: "activity" })
      const request3: any = await baseApiMock({ id: Number(params.userId), param: "average-sessions" })
      const request4: any = await baseApiMock({ id: Number(params.userId), param: "performance" })
      const result1 = await request1.data
      const result2 = await request2.data
      const result3 = await request3.data
      const result4 = await request4.data
      return Promise.all([result1, result2, result3, result4])
    } catch (error) {
      console.log("Err:", error)
    }
  }

  useEffect(() => {
    fetchUser12()
      .then((data) => {
        if (data) {
          const user = new User({
            userData: data[0],
            userActivity: data[1],
            userAverageSessions: data[2],
            userPerformance: data[3],
          })
          setUser(user as any) // TODO: find a way to remove any type
        }
      })
      .catch((e) => {
        setError(e)
      })
  }, [])

  return (
    <div className="app">
      <>
        {!getUser ? (
          <Spinner />
        ) : (
          <>
            <Header />
            <div className="app-container">
              <main className="app-content">
                <div className="app-content-container">
                  <SideNav />
                  {error && <div>Error: {error.message}</div>}
                  {getUser && (
                    <>
                      {<Name user={getUser} />}
                      {
                        <div className="activity-container">
                          <Activity user={getUser} />
                        </div>
                      }
                      <div className="app-inside-content-layout">
                        <div className="app-inside-content-container">
                          {
                            <div className="session-duration-container">
                              <SessionDuration user={getUser} />
                            </div>
                          }
                          {
                            <div className="user-perfs-container">
                              <UserPerfs user={getUser} />
                            </div>
                          }
                          {
                            <div className="score-avg-container">
                              <UserScoreAvg user={getUser} />
                            </div>
                          }
                        </div>
                      </div>
                      {
                        <div className="user-cardinfos-container">
                          <UserInfosCards user={getUser} />
                        </div>
                      }
                    </>
                  )}
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
