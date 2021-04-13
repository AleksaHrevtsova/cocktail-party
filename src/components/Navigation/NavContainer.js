import React, { Component } from 'react'
import Navigation from './Navigation'
import { connect } from 'react-redux'
import selectors from '../../redux/auth/selectors'

class NavContainer extends Component {
    
  render() {
    console.log(this.props.isAuth)
    const { isAuth } = this.props
    return (
      <>
        <Navigation isAuth={isAuth} />
      </>
    )
  }
}
const mapStateToProps = (store) => ({
  isAuth: selectors.isAuthenticated(store),
})
export default connect(mapStateToProps)(NavContainer)
