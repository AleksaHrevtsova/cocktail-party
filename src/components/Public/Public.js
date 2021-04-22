import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import selectors from '../../redux/auth/selectors'

const PublicRoute = ({
  isAuth,
  restricted,
  component: Component,
  ...route
}) => {
  console.log(isAuth)

  // const isAuth = useSelector(selectors.isAuthenticated);
  return (
    <Route
      {...route}
      render={(props) =>
        isAuth && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
    // <Route  {...route}>
    //   {isAuth && restricted ? <Redirect to="/" /> : children}
    // </Route>
  )
}

const mapStateToProps = (store) => ({
  isAuth: selectors.isAuthenticated(store),
})
export default connect(mapStateToProps)(PublicRoute)
