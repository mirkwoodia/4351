import React, { useState } from 'react';
import { PropTypes } from 'prop-types'
import { Form, Button } from 'react-bootstrap'

const LoginPrompt = ({ token, setShowLogin, setLoggedIn }) => {
  const [registerPrompt, setRegisterPrompt] = useState(false)

  const setToken = token.setToken
  const userToken = token.userToken

  const handleSubmit = (e) => {
    e.preventDefault()
    let token;
    if (registerPrompt) {
      token = {userId: 'registered', loggedIn: true} // this is a placeholder for logic including communication with the backend
    }
    else {
      token = {userId: 'logged_in', loggedIn: true} // this is a placeholder for logic including communication with the backend
    }
    setToken(token)
    setShowLogin(false)
    setLoggedIn(true)
  }

  if (registerPrompt) {
    return ( // Register Prompt
      <>
        <h2> Register </h2>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <br/>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button onClick={(e) => { e.preventDefault(); setRegisterPrompt(false)}}>Login?</Button>
        </Form>
      </>
    )
  }
  else {
    return ( // Login Prompt
      <>
        <h2> Login </h2>
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <br/>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button onClick={(e) => { e.preventDefault(); setRegisterPrompt(true)}}>Register?</Button>
        </Form>
      </>
    )
  }
}

LoginPrompt.propTypes = {
  token: PropTypes.shape({
    setToken: PropTypes.func.isRequired,
    userToken: PropTypes.shape({
      userId: PropTypes.string.isRequired,
      loggedIn: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired,
  setShowLogin: PropTypes.func.isRequired,
  setLoggedIn: PropTypes.func.isRequired
}

export default LoginPrompt