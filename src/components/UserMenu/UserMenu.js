import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import s from '../../redux/auth/selectors'
import operations from '../../redux/auth/operations'
import { Button } from 'react-bootstrap'

const UserMenu = ({ userName, myLogout }) => {
  const dispatch = useDispatch()
  const myNewUserName = useSelector(s.getUserName)
  const myNewLogout = dispatch(operations.logout())
  return (
    <div>
      <span>Welcome, {myNewUserName}</span>
      {/* <Button type="button" variant="danger" onClick={myLogout}> */}
      <Button type="button" variant="danger" onClick={myNewLogout}>
        Logout
      </Button>
    </div>
  )
}
// const mapStateToProps = (state) => ({
//   userName: selectors.getUserName(state),
// })
// const mapDispatchToProps = {
//   myLogout: operations.logout,
// }
// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
export default UserMenu
