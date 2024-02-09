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
import { CategoricalChartState } from 'recharts/types/chart/generateCategoricalChart'

function SessionDuration({ user }: User) {
    const sessions = user.getUserAverageSessions().map((session) => {
        return user.formatUserAverageSessions(session)
    })

    const handleMouseMove = (e: CategoricalChartState) => {
        if (e.isTooltipActive) {
            const wrapper = document.querySelector(".custom-linechart")
            const custom_after_child = document.querySelector(".custom-after-child") as HTMLElement | null
            const div = document.createElement('div')
            !custom_after_child && div.classList.add("custom-after-child")
            !custom_after_child && wrapper?.appendChild(div)
            if (wrapper && custom_after_child && e.activeCoordinate) {
                const calcul = wrapper?.clientWidth - e.activeCoordinate.x
                custom_after_child.style.width = `${calcul}px`
            }
        }
    }

    return (
        <>
            <p className="session-duration-title">Durée moyenne de session</p>
            <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#FF0101', borderRadius: '10px' }}>
                <LineChart
                    className="custom-linechart"
                    width={730}
                    height={250}
                    data={sessions}
                    margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
                    onMouseMove={handleMouseMove}
                >
                    <XAxis dataKey="day" tickLine={false} axisLine={false} tickMargin={20} tickSize={2} />
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
                    <Line type="basis" dataKey="sessionLength" stroke="#fff" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </>
    )
}

export default SessionDuration
