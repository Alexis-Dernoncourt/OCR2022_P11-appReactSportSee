import React from "react"
import "./Name.scss"
import { User } from "../../../types"

function Name({ user }: User) {
  const { firstName } = user.getUserInfos().userInfos
  return (
    <div className="name-container">
      <h1>
        Bonjour <span>{firstName}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

export default Name
