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
import { AverageSessionType } from "../../../types"

type AverageSessionProps = {
    userAverageSessions: AverageSessionType[]
}

function SessionDuration({ userAverageSessions }: AverageSessionProps) {
    console.log("SessionDurationProps:", userAverageSessions)
    const sessions = userAverageSessions.map((session) => {
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
