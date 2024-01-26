/* eslint-disable prettier/prettier */
import React from "react"
import "./UserPerfs.scss"
import { DataPerfType, UserPerformanceType } from "../../../types"
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts'

type UserPerfsProps = {
    userPerformance: UserPerformanceType
}

function UserPerfs({ userPerformance }: UserPerfsProps) {
    const userPerfsData = userPerformance.data.map((perf: DataPerfType) => {
        return { ...perf, kind: userPerformance.kind[perf.kind] }
    })

    return (
        <>
            <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#282d30', borderRadius: '10px' }}>
                <RadarChart outerRadius={68} data={userPerfsData}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis tickLine={false} dataKey="kind" tick={{ fill: "white", fontSize: 12 }} fontSize={10} tickFormatter={(props) => {
                        switch (props) {
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
                    }} />
                    <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} strokeOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </>
    )
}

export default UserPerfs
