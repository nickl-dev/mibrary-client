import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logo from '../../logo.svg';

import './Login.css'

function Login () {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const res = axios.get(process.env.REACT_APP_API_BASE_URL)
    console.log(res)
  }, [])

  return (
    <div className="login d-flex flex-column align-items-center justify-content-center">
      <h1 className="login__heading">Login</h1>

    <img src={logo} className="logo my-5" alt="Spinning book" />

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit">
          Login
        </Button>
      </Form>

      <Link to='/register' className="mt-4 tex">Don't Have an Account Yet?</Link>
    </div>
  )
}


export default Login;
