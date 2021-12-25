import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './LoginOrRegister.css'
import CustomForm from '../../components/CustomForm/CustomForm'

function LoginOrRegister () {

  const [loginForm, setLoginForm] = useState(true)
  const [loginInputValues, setLoginInputValues] = useState({
    email: '',
    password: ''
  })
  const [registerInputValues, setRegisterInputValues] = useState({
    username: '',
    email: '',
    password: ''
  })

  const loginInputs = [
    {
      controlId: 'formBasicEmail',
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter Email Address',
      name: 'email',
      onChange: handleChange(loginInputValues, setLoginInputValues)
    },
    {
      controlId: 'formBasicPassword',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      name: 'password',
      onChange: handleChange(loginInputValues, setLoginInputValues)
    }
  ]

  const registerInputs = [
    {
      type: 'text',
      label: 'Username',
      placeholder: 'Enter Username',
      name: 'username',
      onChange: handleChange(registerInputValues, setRegisterInputValues)

    },
    {
      controlId: 'formBasicEmail',
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter Email Address',
      name: 'email',
      onChange: handleChange(registerInputValues, setRegisterInputValues)
    },
    {
      controlId: 'formBasicPassword',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      name: 'password',
      onChange: handleChange(registerInputValues, setRegisterInputValues)
    }
  ]

  const customForm = <CustomForm inputList={loginForm ? loginInputs : registerInputs} submitButtonText={loginForm ? 'Login' : 'Register'} onSubmit={handleSubmit} />

  function handleChange (event, hookState, hookFunction) {
    if (event) {
      const { name, value } = event.target
      console.log(name, value)
    }
  }

  function handleSubmit (event) {
    event.preventDefault()
    if (loginForm) {
      alert('Login form')
    }
  }

  return (
    <div className="login-register d-flex flex-column align-items-center justify-content-center">
      <h1>{loginForm ? 'Login' : 'Register'}</h1>
      <img src={logo} className="login-register__logo my-5" alt="Spinning book" />
      {customForm}
      <Link to="#" className="mt-4" onClick={() => setLoginForm(!loginForm)}>{loginForm ? 'Dont have an account yet?' : 'Already have an account?'}</Link>
    </div>
  )
}


export default LoginOrRegister;
