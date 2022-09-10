import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import bookstackLogo from '../../assets/bookstack-logo.svg'
import './Login.scss'
import AppForm from '../../components/AppForm/AppForm'

function Login() {
  useEffect(() => document.title = 'Personal Reading List | Login', [])

  // State
  const [loginInputValues, setLoginInputValues] = useState({
    email: '',
    password: ''
  })

  // Inputs
  const loginInputs = [
    {
      type: 'email',
      label: 'Email Address',
      controlId: 'email',
      placeholder: 'Enter email address',
      name: 'email',
      value: loginInputValues.email,
      onChange: handleInputChange
    },
    {
      type: 'password',
      label: 'Password',
      controlId: 'password',
      placeholder: 'Enter password',
      name: 'password',
      value: loginInputValues.password,
      onChange: handleInputChange
    }
  ]

  function handleInputChange(event) {
    const { name, value } = event.target
    console.log(event)
    setLoginInputValues({ ...loginInputValues, [name]: value })
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="login d-lg-flex">
      <div className="background" />
      <div className="login__content d-flex flex-column align-items-center justify-content-center">
        <h1 className="login-register-heading mb-3">Login</h1>
        <img
          src={bookstackLogo}
          className="spinning-book"
          alt="Spinning bookstack"
        />

        <AppForm
          inputList={loginInputs}
          submitButtonText='Login'
          onSubmit={handleSubmit}
        />

        <Link
          to="/register"
          className="mt-4"
        >
          Don't have an account yet?
        </Link>
      </div>
    </div>
  )
}


export default Login;
