/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import "./Activity.scss"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from "recharts"
import { SessionType } from "../../../types"

type ActivityProps = {
  userActivity: SessionType[]
}

function Activity({ userActivity }: ActivityProps) {
  const activitys = userActivity.map((activity) => {
    const convertedDay = new Date(activity.day).getDate()
    return { day: convertedDay, kilogrammes: activity.kilogram, calories: activity.calories }
  })

  return (
    <>
      <p className="activity-title">Activité quotidienne</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={activitys}
          barGap={-40}
          title="Graphique - Activité quotidienne"
          margin={{
            top: 23,
            right: 30,
            left: 20,
            bottom: 23,
          }}
        >
          <CartesianGrid stroke="#ccc" strokeWidth={1} strokeDasharray="2 2" vertical={false} />
          <XAxis dataKey="day" color="#020203" tickLine={false} axisLine={false} tickMargin={16} />
          <YAxis yAxisId="left" orientation="right" stroke="#020203" tickLine={false} axisLine={false} />
          <YAxis yAxisId="right" orientation="left" stroke="#FF0101" hide={true} />
          <Tooltip
            contentStyle={{ background: "#FF0101", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
            labelFormatter={() => ""}
            formatter={(value, name) => {
              if (name === "kilogrammes") {
                return [`${value}Kg`, null]
              } else if (name === "calories") {
                return [`${value}Kcal`, null]
              }
            }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            height={60}
            formatter={(value) => {
              if (value === "kilogrammes") {
                return "Poids (Kg)"
              } else if (value === "calories") {
                return "Calories brûlées (kCal)"
              }
            }}
          />
          <Bar yAxisId="left" radius={[20, 20, 0, 0]} maxBarSize={10} dataKey="kilogrammes" fill="#020203" />
          <Bar yAxisId="right" radius={[20, 20, 0, 0]} maxBarSize={10} dataKey="calories" fill="#FF0101" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default Activity
