import React, { Component, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect, useDispatch } from 'react-redux'
import operations from '../../redux/auth/operations'

// const mapDispatchToProps = {
//   myRegister: operations.register,
// }
// export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)

const RegisterPage = ({ myRegister, isAuth }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        return
      case 'email':
        setEmail(value)
        return
      case 'password':
        setPassword(value)
        return
      default:
        console.log(`что-то не так с инпутом!`)
        return
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    // myRegister({ name, email, password })
    dispatch(operations.register({ name, email, password }))
    setName('')
    setEmail('')
    setPassword('')
  }
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            value={name}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={handleChange}
            value={email}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

// class RegisterPage extends Component {
//   state = {
//     name: '',
//     email: '',
//     password: '',
//   }
//   handleChange = (e) => {
//     const { name, value } = e.target
//     this.setState({ [name]: value })
//   }
//   handleSubmit = (e) => {
//     e.preventDefault()
//     this.props.myRegister({ ...this.state })
//     this.setState({ name: '', email: '', password: '' })
//   }
//   render() {
//     console.log(this.props.isAuth)
//     const { handleChange, handleSubmit } = this
//     const { name, email, password } = this.state
//     return (
//       <>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="text"
//               name="name"
//               placeholder="Enter your name"
//               onChange={handleChange}
//               value={name}
//             />
//           </Form.Group>
//           <Form.Group controlId="formBasicEmail">
//             <Form.Label>Email address</Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               placeholder="Enter email"
//               onChange={handleChange}
//               value={email}
//             />
//           </Form.Group>

//           <Form.Group controlId="formBasicPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               name="password"
//               placeholder="Password"
//               onChange={handleChange}
//               value={password}
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </>
//     )
//   }
// }
// const mapStateToProps = (store) => ({
//   isAuth: selectors.isAuthenticated(store),
// })
// const mapDispatchToProps = {
//   myRegister: operations.register,
// }
// export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
export default RegisterPage
