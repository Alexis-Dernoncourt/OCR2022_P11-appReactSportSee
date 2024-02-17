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
import {
  SessionAverageSessionType,
  SessionType,
  UserActivity,
  UserClassType,
  UserPerformanceType,
  UserType,
} from "../types"
// import { AxiosResponse } from "axios"

type UserID = {
  userId?: string
}

function App() {
  const [getUser, setUser] = useState<UserClassType>()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [error, setError] = useState<any>(null)
  const params = useParams<UserID>()
  const regx = new RegExp(/\d+/)

  async function fetchUser12() {
    if (!params.userId || !regx.test(params.userId)) throw new Error("Id is invalid !")
    try {
      // const request = await axiosInstance.request({ url: `/${params.userId}`, method: "get" })
      // const request1_0: AxiosResponse<{ data: { userId: number; sessions: SessionType[] } }> =
      //   await axiosInstance.request({
      //     url: `/${params.userId}/activity`,
      //     method: "get",
      //   })
      // const request2_0: any = await axiosInstance.request({ url: `/${params.userId}/average-sessions`, method: "get" })
      // console.log("🚀 ~ fetchUser12 ~ request1_0.data:", request1_0.data)
      // const request3_0: any = await axiosInstance.request({ url: `/${params.userId}/performance`, method: "get" })
      // console.log("🚀 ~ fetchUser12 ~ request:", request)
      const request1 = (await baseApiMock({ id: Number(params.userId), param: "user" })) as { data: UserType }
      const request2 = (await baseApiMock({ id: Number(params.userId), param: "activity" })) as { data: SessionType[] }
      const request3 = (await baseApiMock({ id: Number(params.userId), param: "average-sessions" })) as {
        data: UserType
      }
      const request4 = (await baseApiMock({ id: Number(params.userId), param: "performance" })) as {
        data: UserPerformanceType[]
      }
      const result1 = request1.data
      // const result1_0 = request1_0.data
      const result2 = request2.data
      const result3 = request3.data
      const result4 = request4.data
      return Promise.all([result1, result2, result3, result4])
    } catch (error) {
      console.log("Err:", error)
    }
  }

  useEffect(() => {
    error && setError(null)
    fetchUser12()
      .then((data) => {
        if (data) {
          const user = new User({
            userData: data[0],
            userActivity: data[1] as unknown as UserActivity,
            userAverageSessions: data[2] as unknown as SessionAverageSessionType,
            userPerformance: data[3] as unknown as UserPerformanceType,
          })
          setUser(user as unknown as UserClassType)
        }
      })
      .catch((e) => {
        setError(e)
      })
  }, [params.userId])

  return (
    <div className="app">
      <>
        {!getUser && !error ? (
          <Spinner />
        ) : (
          <>
            <Header />
            <div className="app-container">
              <main className="app-content">
                <div className="app-content-container">
                  <SideNav />
                  {error && <div style={{ padding: "10px", color: "red" }}>Error: {error.message}</div>}
                  {getUser && !error && (
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
