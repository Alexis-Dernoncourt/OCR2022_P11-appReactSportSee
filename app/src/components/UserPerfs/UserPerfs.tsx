/* eslint-disable prettier/prettier */
import React from "react"
import "./UserPerfs.scss"
import { DataPerfType, User } from "../../../types"
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts'

function UserPerfs({ user }: User) {
    const userPerfsData = user.getUserPerformance().data.map((perf: DataPerfType) => {
        const kind = user.getUserPerformance().kind
        const frKInd = user.formatUserPerfsKind(Object.values(kind)[perf.kind - 1])
        return { ...perf, kind: frKInd }
    })

    return (
        <>
            <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#282d30', borderRadius: '10px' }}>
                <RadarChart outerRadius={68} data={userPerfsData}>
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis tickLine={false} dataKey="kind" tick={{ fill: "white", fontSize: 12 }} fontSize={10} />
                    <Radar dataKey="value" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} strokeOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </>
    )
}

export default UserPerfs
