import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import './Navbar.css';

const navBar = (
    <Navbar className="navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/">Mibrary</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Login
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

function NavBar () {

  let [token, setToken] = useState({ token: 12345});

  const location = useLocation();



  return ( navBar )
}

export default NavBar;
