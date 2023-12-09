import React from "react"
import "./SideNav.scss"
import { NavLink } from "react-router-dom"

function SideNav() {
  return (
    <aside className="sidenav-container">
      <nav>
        <ul>
          <li>
            <NavLink to={"/"} className="sidenav-link sidenav-link--zen" title="Go to page XXX" />
          </li>
          <li>
            <NavLink to={"/"} className="sidenav-link sidenav-link--swim" title="Go to page XXX" />
          </li>
          <li>
            <NavLink to={"/"} className="sidenav-link sidenav-link--velo" title="Go to page XXX" />
          </li>
          <li>
            <NavLink to={"/"} className="sidenav-link sidenav-link--fit" title="Go to page XXX" />
          </li>
        </ul>
      </nav>
      <p>Copiryght, SportSee 2020</p>
    </aside>
  )
}

export default SideNav
