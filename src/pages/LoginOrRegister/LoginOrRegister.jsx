import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './LoginOrRegister.css'
import CustomForm from '../../components/CustomForm/CustomForm'

function LoginOrRegister () {

  const loginInputs = [
    {
      formControlId: 'formBasicEmail',
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter Email Address'
    },
    {
      formControlId: 'formBasicPassword',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter Password'
    }
  ]

  const registerInputs = [
    {
      formControlId: 'formBasicEmail',
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter Email Address'
    },
    {
      type: 'text',
      label: 'Username',
      placeholder: 'Enter Username'
    },
    {
      formControlId: 'formBasicPassword',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter Password'
    }
  ]

  const [loginForm, setLoginForm] = useState(true)

  useEffect(() => {
    async function getUsers() {
      await axios.get(process.env.REACT_APP_API_BASE_URL)
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.error(err)
      })
    }
    getUsers()
  }, [])

  return (
    <div className="login-register d-flex flex-column align-items-center justify-content-center">
      <h1>{loginForm ? 'Login' : 'Register'}</h1>

    <img src={logo} className="login-register__logo my-5" alt="Spinning book" />

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit">
          Login
        </Button>
      </Form>

      <small className="mt-4 tex" onClick={() => setLoginForm(!loginForm)}>Don't Have an Account Yet?</small>
    </div>
  )
}


export default LoginOrRegister;
