/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react"
import "./UserScoreAvg.scss"
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import { User } from '../../../types'

function UserScoreAvg({ user }: User) {
    const userInfos = user.getUserInfos()
    const score = userInfos.score || 0
    const data = [
        {
            avg: score! * 100,
            objectif: 100,
            fill: '#FF0101',
        }
    ]
    return (
        <>
            <div className='user-score-main-title'>Score</div>
            <div className='user-score-title'>{score! * 100}% <br />de votre <br />objectif</div>
            <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#00000005', borderRadius: '10px' }}>
                <RadialBarChart
                    innerRadius="100%"
                    outerRadius="75%"
                    data={data}
                    startAngle={360}
                    endAngle={0}
                >
                    <RadialBar label={{ fill: 'none' }} dataKey='avg' cornerRadius={20} />
                    < RadialBar display={'none'} dataKey='objectif' />
                </RadialBarChart>
            </ResponsiveContainer>
        </>
    )
}

export default UserScoreAvg
