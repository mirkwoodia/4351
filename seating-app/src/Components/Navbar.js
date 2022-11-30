import { useState, useEffect } from 'react'
import LoginPrompt from './LoginPrompt'
import Container from 'react-bootstrap/Container'
import { Card, Modal, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { PropTypes } from 'prop-types'

const NavBar = ({ token }) => {
  const [showLogin, setShowLogin] = useState(false)
  const handleShowLogin = () => { setShowLogin(true) }
  const handleCloseLogin = () => { setShowLogin(false) }

  const [showUser, setShowUser] = useState(false)
  const handleShowUser = () => { setShowUser(true) }
  const handleCloseUser = () => { setShowUser(false) }
  
  const handleLogout = () => {
    token.setToken({
      userId: 'not_registered',
      loggedIn: false
    })
    window.location.href='/'
  }

  const Login = () => {
    if (!token.userToken.loggedIn) {
      return (
        <>
          <Nav.Link as="Button" style={{ borderStyle: 'none', background: 'none' }}
                    onClick={handleShowLogin}>
            Login
          </Nav.Link>
        </>
      )
    }
    else {
      return (
        <>
          <Nav.Link as="Button" style={{ borderStyle: 'none', background: 'none' }}
                    onClick={handleShowUser}>
            User
          </Nav.Link>
          <Nav.Link as="Button" style={{ borderStyle: 'none', background: 'none' }}
                    onClick={handleLogout}>
            Log Out
          </Nav.Link>
        </>
      )
    }
  }

  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Acme Restaurant</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="reserve-navbar-nav"/>
          <Navbar.Collapse id="reserve-navbar-navv">
            <Nav className="me-auto">
              <LinkContainer to="/home">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/reserve">
                <Nav.Link>Reserve</Nav.Link>
              </LinkContainer>
              <Login/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Card style={{padding: "8px"}}>
          <LoginPrompt token={token} setShowLogin={setShowLogin} />
        </Card>
      </Modal>
      <Modal show={showUser} onHide={handleCloseUser}>
        <Card style={{padding: "8px"}}>
          <> This is where user information would go </>
        </Card>
      </Modal>
    </>
  )
}

NavBar.propTypes = {
  token: PropTypes.shape({
    setToken: PropTypes.func.isRequired,
    userToken: PropTypes.shape({
      userId: PropTypes.string.isRequired,
      loggedIn: PropTypes.bool.isRequired
    }).isRequired
  }).isRequired
}


export default NavBar;