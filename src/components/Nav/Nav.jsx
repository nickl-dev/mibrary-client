import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import './Nav.scss'

const nav = (
    <Navbar className="navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/">BookStack</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/*Login*/}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

function Nav () {
  return ( nav )
}

export default Nav;
