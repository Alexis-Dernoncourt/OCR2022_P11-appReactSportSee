export type User = {
    id: number;
    todayScore: number;
    keyData: KeyData;
    userInfos: UserInfos;
}

type KeyData = {
    calorieCount: number;
    carbohydrateCount: number;
    lipidCount: number;
    proteinCount: number;
}
type UserInfos = {
    age: number;
    firstName: string;
    lastName: string;
}
