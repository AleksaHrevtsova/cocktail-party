import React, { Component } from 'react'
import App from './App'
import { connect } from 'react-redux'
import operations from './redux/auth/operations'
import selectors from './redux/auth/selectors'

class AppContainer extends Component {
  state = {}
  componentDidMount() {
    this.props.getMyUser()
  }

  render() {
    const { isAuth } = this.props
    return <App isAuth={isAuth} />
  }
}

const mapStateToProps = (store) => ({
  isAuth: selectors.isAuthenticated(store),
})
const mapDispatchToProps = {
  getMyUser: operations.getCurrentUser,
}
export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
