/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react"
import "./UserScoreAvg.scss"
import { RadialBarChart, RadialBar, Tooltip, ResponsiveContainer } from 'recharts'

function UserScoreAvg({ userScore }: { userScore: number }) {
    const data = [
        {
            avg: userScore * 100,
            objectif: 100,
            fill: '#FF0101',
        }
    ]
    return (
        <>
            <div className='user-score-title'>{userScore * 100}% <br />de votre <br />objectif</div>
            <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#f3f3f3', borderRadius: '10px' }}>
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
