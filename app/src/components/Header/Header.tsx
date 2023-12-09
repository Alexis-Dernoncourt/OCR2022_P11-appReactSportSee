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
            <NavLink to="/user/12" className={({ isActive }) => (isActive ? "active" : "")}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/profile" className={({ isActive }) => (isActive ? "active" : "")}>
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={({ isActive }) => (isActive ? "active" : "")}>
              Réglage
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" className={({ isActive }) => (isActive ? "active" : "")}>
              Communauté
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
