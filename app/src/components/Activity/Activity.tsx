/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import "./Activity.scss"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from "recharts"
import { SessionType } from "../../../types"

type ActivityProps = {
  userActivity: SessionType[]
}

function Activity({ userActivity }: ActivityProps) {
  console.log("ActivityProps:", userActivity)
  const activitys = userActivity.map((activity) => {
    console.log("activity:", activity)
    const convertedDay = new Date(activity.day).getDate()
    return { day: convertedDay, kilogrammes: activity.kilogram, calories: activity.calories }
    // Intl.DateTimeFormat("fr-FR", {
    //   dateStyle: "short",
    //   timeStyle: "short",
    // }).format(new Date(activity.day))
  })

  console.log("activitys_map:", activitys)

  return (
    <>
      <p className="activity-title">Activité quotidienne</p>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={100}
          height={100}
          data={activitys}
          title="Graphique - Activité quotidienne"
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#ccc" strokeWidth={1} strokeDasharray="5 5" vertical={false} />
          <XAxis dataKey="day" color="#020203" tickLine={false} axisLine={false} />
          <YAxis yAxisId="left" orientation="right" stroke="#020203" tickLine={false} axisLine={false} />
          <YAxis yAxisId="right" orientation="left" stroke="#FF0101" hide={true} />
          <Tooltip
            contentStyle={{ background: "#FF0101", color: "#fff" }}
            itemStyle={{ color: "#fff" }}
            labelFormatter={() => ""}
            formatter={(value, name, props) => {
              console.log("toto:", value, name, props)
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
          <Bar yAxisId="left" dataKey="kilogrammes" fill="#020203" />
          <Bar yAxisId="right" dataKey="calories" fill="#FF0101" />
        </BarChart>
      </ResponsiveContainer>
    </>
  )
}

export default Activity
