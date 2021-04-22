import React from 'react'
import s from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
import { withRouter, useRouteMatch, useParams } from 'react-router-dom'
import UserMenu from '../UserMenu/UserMenu'
import PropTypes from 'prop-types'
// import {useMatch }from 'react-router'

const Navigation = ({ match, isAuth }) => {
  const myMatch = useRouteMatch()
  // const myParams = useParams()
  // console.log('myMatch', myMatch)
  // console.log('myParams', myParams)

  // console.log(match.url)
  // console.log(isAuth)
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
          <NavLink to={`${myMatch.url}`}>Home</NavLink>
        </li>
        <li>
          <NavLink to={`${myMatch.url}cocktails`}>Cocktails</NavLink>
        </li>
        <li>
          <NavLink to={`${myMatch.url}contacts`}>Contacts</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default withRouter(Navigation)

Navigation.propTypes = {
  isAuth: PropTypes.bool.isRequired,
}
