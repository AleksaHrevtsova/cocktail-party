import React from 'react'
import s from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const Navigation = ({ match }) => {
  // console.log(match)
  // console.log(match.url)

  return (
    <nav>
      <ul className={s.navList}>
        <li>
          <NavLink to={`${match.url}`}>Home</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}cocktails`}>Cocktails</NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}contacts`}>Contacts</NavLink>
        </li>
      </ul>
    </nav>
  )
}
export default withRouter(Navigation)
