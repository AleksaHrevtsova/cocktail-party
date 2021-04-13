import React from 'react'
import { connect } from 'react-redux'
import selectors from '../../redux/auth/selectors'
import operations from '../../redux/auth/operations'
import { Button } from 'react-bootstrap'

const UserMenu = ({ userName, myLogout }) => (
  <div>
    <span>Welcome, {userName}</span>
    <Button type="button" variant="danger" onClick={myLogout}>
      Logout
    </Button>
  </div>
)
const mapStateToProps = (state) => ({
  userName: selectors.getUserName(state),
})
const mapDispatchToProps = {
  myLogout: operations.logout,
}
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
