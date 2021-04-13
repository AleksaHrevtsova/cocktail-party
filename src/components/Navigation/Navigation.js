import React from 'react'
import s from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import UserMenu from '../UserMenu/UserMenu'

const Navigation = ({ match, isAuth }) => {
  // console.log(match)
  // console.log(match.url)
  console.log(isAuth)
  return (
    <nav>
      {isAuth ? (
        <>
          <UserMenu />
        </>
      ) : (
        <ul className={s.navList}>
          <li>
            <NavLink to="/register" exact>
              Registration
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" exact>
              Login
            </NavLink>
          </li>
        </ul>
      )}
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
