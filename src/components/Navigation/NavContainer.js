import React, { Component } from 'react'
import Navigation from './Navigation'
import { connect, useSelector } from 'react-redux'
import selectors from '../../redux/auth/selectors'

export default function NavContainer() {
  // console.log(this.props.isAuth)
  // const { isAuth } = this.props
  const isAuth = useSelector(selectors.isAuthenticated)
  return (
    <>
      <Navigation isAuth={isAuth} />
    </>
  )
}
// const mapStateToProps = (store) => ({
//   isAuth: selectors.isAuthenticated(store),
// })
// export default connect(mapStateToProps)(NavContainer)
export default NavContainer
