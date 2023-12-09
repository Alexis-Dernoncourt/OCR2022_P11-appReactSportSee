export type User = {
  id: number
  todayScore: number
  keyData: KeyData
  userInfos: UserInfos
}

type KeyData = {
  calorieCount: number
  carbohydrateCount: number
  lipidCount: number
  proteinCount: number
}
type UserInfos = {
  age: number
  firstName: string
  lastName: string
}

export type UserPerformanceType = {
  userId: number
  kind: KindType
  data: DataPerfType
}

type KindType = {
  1: "cardio"
  2: "energy"
  3: "endurance"
  4: "strength"
  5: "speed"
  6: "intensity"
}

type DataPerfType = {
  value: number
  kind: number
}

export type UserActivity = {
  userId: number
  sessions: SessionType
}

export type SessionType = {
  day: string
  kilogram: number
  calories: number
}

export type AverageSessionType = {
  day: number
  sessionLength: number
}
