/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import "./SessionDuration.scss"
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Label,
    LineChart,
    Line,
} from "recharts"
import { User } from "../../../types"

function SessionDuration({ user }: User) {
    const sessions = user.getUserAverageSessions().map((session) => {
        return user.formatUserAverageSessions(session)
    })

    // const handleMouseMove = (e: any) => {
    //     console.log('coucou_toi!!!! :', e);
    // }

    return (
        <>
            <p className="session-duration-title">Durée moyenne de session</p>
            <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#FF0101', borderRadius: '10px' }}>
                <LineChart
                    width={730}
                    height={250}
                    data={sessions}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                // onMouseMove={handleMouseMove}
                >
                    <XAxis dataKey="day" tickLine={false} axisLine={false} tickSize={2} />
                    <Tooltip
                        contentStyle={{ background: "#fff", color: "#020203" }}
                        itemStyle={{ color: "#020203" }}
                        labelFormatter={() => ""}
                        labelStyle={{ color: '#fff' }}
                        formatter={(value) => {
                            return [`${value} min`, null]
                        }}
                    />
                    <Legend formatter={() => ""} iconSize={0} />
                    <Line type="basis" dataKey="sessionLength" stroke="#fff" />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default SessionDuration
