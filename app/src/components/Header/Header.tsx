import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.scss"

function Header() {
  return (
    <header className="header-container">
      <img src={process.env.PUBLIC_URL + "/images/logo.svg"} />
      <nav>
        <ul>
          <li>
            <NavLink
              to="/user/12"
              className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user/profile"
              className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}
            >
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}
            >
              Réglage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/community"
              className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}
            >
              Communauté
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
