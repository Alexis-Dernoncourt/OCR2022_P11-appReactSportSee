/* eslint-disable prettier/prettier */
import React from "react"
import "./UserInfosCards.scss"
import { User } from "../../../types"


function UserInfosCards({ user }: User) {
    const userInfos = user.userInfos.keyData
    return (
        <>
            {
                Object.entries(userInfos).map((info) => {
                    const userInfosClass = user.returnTheGoodCard(info[0])
                    return (
                        // TODO: remove into component ?
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
