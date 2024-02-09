/* eslint-disable prettier/prettier */

import { AverageSessionType, UserClassConstructorType } from '../../types';

class User {
    public id;
    protected userActivity;
    protected userInfos;
    protected userAverageSessions;
    protected userPerformance;

    constructor(user: UserClassConstructorType) {
        const { id, keyData, userInfos, ...restUserData } = user.userData
        this.id = id
        this.userActivity = user.userActivity.sessions
        this.userInfos = { keyData, userInfos, score: restUserData.score || restUserData.todayScore }
        this.userAverageSessions = user.userAverageSessions.sessions
        this.userPerformance = user.userPerformance
    }

    public getUserActivity = () => {
        return this.userActivity
    }

    public getUserPerformance = () => {
        return this.userPerformance
    }

    public getUserAverageSessions = () => {
        return this.userAverageSessions
    }

    public formatUserAverageSessions = (session: AverageSessionType) => {
        if (session.day === 1) {
            return { ...session, day: "L" };
        } else if (session.day === 2 || session.day === 3) {
            return { ...session, day: "M" };
        } else if (session.day === 4) {
            return { ...session, day: "J" };
        } else if (session.day === 5) {
            return { ...session, day: "V" };
        } else if (session.day === 6) {
            return { ...session, day: "S" };
        } else if (session.day === 7) {
            return { ...session, day: "D" };
        }
    }

    public formatUserPerfsKind = (perf: string): string => {
        switch (perf) {
            case 'intensity':
                return 'Intensité'
            case 'cardio':
                return 'Cardio'
            case 'endurance':
                return 'Endurance'
            case 'strength':
                return 'Force'
            case 'energy':
                return 'Énergie'
            case 'speed':
                return 'Vitesse'
            default:
                return ''
        }
    }

    public getUserInfos = () => {
        return this.userInfos
    }

    public returnTheGoodCard = (reference: string): string => {
        switch (reference) {
            case 'calorieCount':
                return 'Calories'
            case 'carbohydrateCount':
                return 'Glucides'
            case 'lipidCount':
                return 'Lipides'
            case 'proteinCount':
                return 'Protéines'
            default:
                return ''
        }
    }
}

export default User
