import Container from 'react-bootstrap/Container'
import {Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {
  return (
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
            <LinkContainer to="reserve">
              <Nav.Link>Reserve</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;