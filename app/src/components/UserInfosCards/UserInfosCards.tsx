/* eslint-disable prettier/prettier */
import React from "react"
import "./UserInfosCards.scss"
import { KeyData } from '../../../types'

type UserInfosCardsProps = {
    userInfos: KeyData
}

function UserInfosCards({ userInfos }: UserInfosCardsProps) {
    function returnTheGoodCard(reference: any) {
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
                break;
        }
    }

    return (
        <>
            {
                Object.entries(userInfos).map((info) => {
                    const userInfosClass = returnTheGoodCard(info[0])
                    return (
                        <div key={info[0]} className='card-info-container'>
                            <div className={userInfosClass + ' card-info-item'}>
                                <div className='card-info-text-item'>
                                    <div className='card-info-title'>{`${info[1]} ${(userInfosClass === 'Calories') ? 'kCal' : 'g'}`}</div>
                                    <div className='card-info-text'>{userInfosClass}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default UserInfosCards
