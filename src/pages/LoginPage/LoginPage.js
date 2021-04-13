import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ email: '', password: '' })
  }
  render() {
    const { handleChange, handleSubmit } = this
    const { email, password } = this.state
    return (
      <>
        <Form onSubmit={handleSubmit}>
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
}
export default LoginPage
