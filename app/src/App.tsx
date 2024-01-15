/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react"
import "./App.scss"
import { baseApiMock } from "./api/config"
import { AverageSessionType, SessionType, User, UserPerformanceType } from "../types/index"
import { useParams } from "react-router-dom"
import Spinner from "./components/Spinner"
import Header from "./components/Header/Header"
import SideNav from "./components/SideNav/SideNav"
import Name from "./components/Name/Name"
import Activity from "./components/Activity/Activity"
// import { useWidowFocus } from "./hooks"

type UserID = {
  userId?: string
}

function App() {
  const [userData, setUserData] = useState<User | null>(null)
  const [userActivity, setUserActivity] = useState<SessionType[] | null>(null)
  const [userAverageSessions, setUserAverageSessions] = useState<AverageSessionType[] | null>(null)
  const [userPerformance, setUserPerformance] = useState<UserPerformanceType | null>(null)
  const [error, setError] = useState<any>(null)
  const params = useParams<UserID>()

  // const { state }: any = useWidowFocus()

  async function fetchUser12() {
    if (!params.userId) throw Error("Id is missing!")
    try {
      // const request = await axiosInstance.request({ url: `/${params.userId}`, method: "get" })
      const request1: any = await baseApiMock("user")
      const request2: any = await baseApiMock("activity")
      const request3: any = await baseApiMock("average-sessions")
      const request4: any = await baseApiMock("performance")
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
        data && setUserData(data[0])
        data && setUserActivity(data[1].sessions)
        data && setUserAverageSessions(data[2].sessions)
        data && console.log("DATA=>", data[3])
        data && setUserPerformance(data[3])
        console.log("userActivity__APP:", userActivity)
      })
      .catch((e) => {
        setError(e)
      })
  }, [])

  return (
    <div className="app">
      <>
        {!userActivity || !userData ? (
          <Spinner />
        ) : (
          <>
            <Header />
            <div className="app-container">
              <main className="app-content">
                <SideNav />
                <div className="app-content-container">
                  {error && <div>Error: {error.message}</div>}
                  {userData && <Name firstName={userData.userInfos.firstName} lastName={userData.userInfos.lastName} />}
                  {userActivity && (
                    <div className="activity-container">
                      <Activity userActivity={userActivity} />
                    </div>
                  )}
                  {/* {userData && <p>{userData.todayScore}</p>}
                  <div>Age: {userActivity[0].day}</div>
                  {userAverageSessions && <div>Test: {userAverageSessions[0].sessionLength}</div>}
                  {userPerformance && <div>TestPerf: {userPerformance.kind[1]}</div>} */}
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
