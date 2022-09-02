import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bookstackLogo from '../../assets/logo.svg'
import './Login.scss'
import AppForm from '../../components/AppForm/AppForm'

function LoginOrRegister () {
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
      placeholder: 'Enter Email Address',
      name: 'email',
      value: loginInputValues.email,
      onChange: handleInputChange
    },
    {
      type: 'password',
      label: 'Password',
      controlId: 'password',
      placeholder: 'Enter Password',
      name: 'password',
      value: loginInputValues.password,
      onChange: handleInputChange
    }
  ]

  function handleInputChange (event) {
    const { name, value } = event.target
    console.log(event)
    setLoginInputValues( {...loginInputValues, [name]: value} )
  }

  function handleSubmit (event) {
    event.preventDefault();
  }

  return (
    <div className="login d-flex flex-column align-items-center justify-content-center">
      <h1>Login</h1>
      <img
        src={bookstackLogo}
        className="login__logo my-5"
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
  )
}


export default LoginOrRegister;
