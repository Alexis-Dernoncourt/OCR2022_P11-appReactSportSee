import React from "react"
import "./Name.scss"

type Props = {
  firstName: string
  lastName?: string
}

function Name({ firstName }: Props) {
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
