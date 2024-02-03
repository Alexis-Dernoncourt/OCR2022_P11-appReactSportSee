export type UserType = {
  id: number
  score: number
  todayScore?: number
  keyData: KeyData
  userInfos: UserInfos
}

export type userDataType = {
  userInfos: UserType
}

export type UserClassType = {
  userInfos: UserType
  userActivity: SessionType[]
  userAverageSessions: AverageSessionType[]
  formatUserAverageSessions: (arg: AverageSessionType) => AverageSessionType
  formatUserPerfsKind: (arg: Kinds) => string
  getUserInfos: () => UserType
  getUserActivity: () => SessionType[]
  getUserPerformance: () => UserPerformanceType
  getUserAverageSessions: () => AverageSessionType[]
  returnTheGoodCard: (arg0: string) => string
}

export type UserClassConstructorType = {
  userData: UserType
  userActivity: UserActivity
  userPerformance: UserPerformanceType
  userAverageSessions: SessionAverageSessionType
}

export type User = {
  user: UserClassType
}

export type KeyData = {
  calorieCount: number
  carbohydrateCount: number
  lipidCount: number
  proteinCount: number
}

export type UserInfos = {
  age: number
  firstName: string
  lastName: string
}

export type UserPerformanceType = {
  userId: number
  kind: KindType | number
  data: DataPerfType[]
}

export type KindType = {
  1: "cardio"
  2: "energy"
  3: "endurance"
  4: "strength"
  5: "speed"
  6: "intensity"
}

type Kinds = "cardio" | "energy" | "endurance" | "strength" | "speed" | "intensity"

// type ConstructKindType<Type> = {
//   [Property in keyof Type]: string
// }

export type DataPerfType = {
  value: number
  kind: number
}

export type UserActivity = {
  sessions: SessionType[]
}

export type SessionType = {
  day: string
  kilogram: number
  calories: number
}

export type AverageSessionType = {
  day: number | string
  sessionLength: number
}

export type SessionAverageSessionType = {
  sessions: AverageSessionType[]
}
