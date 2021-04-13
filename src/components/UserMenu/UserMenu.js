import React from 'react'
import { connect } from 'react-redux'
// import { selectors, operations } from '../../redux/auth';
import { Button } from 'react-bootstrap'

const UserMenu = ({ name, onLogout }) => (
  <div style={styles.container}>
    <span>Welcome, {name}</span>
    <Button type="button" variant="danger" onClick={onLogout}>
      Logout
    </Button>
  </div>
)
const mapStateToProps = (state) => ({
  //   name: selectors.getUsername(state),
})

const mapDispatchToProps = {
  //   onLogout: operations.logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
