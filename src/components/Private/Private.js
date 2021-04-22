import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import selectors from '../../redux/auth/selectors'

const PrivateRoute = ({ isAuth, component: Component, ...route }) => {
  console.log(isAuth)
  // const isAuth = useSelector(selectors.isAuthenticated);
  return (
    <Route
      {...route}
      render={(props) =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
    // <Route  {...route}>
    //   { isAuth ? children /> : <Redirect to="/login" />}
    // </Route>
  )
}
const mapStateToProps = (store) => ({
  isAuth: selectors.isAuthenticated(store),
})
export default connect(mapStateToProps)(PrivateRoute)
