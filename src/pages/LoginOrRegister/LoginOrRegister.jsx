import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './LoginOrRegister.css'
import CustomForm from '../../components/CustomForm/CustomForm'

function LoginOrRegister () {

  // State
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

  // Inputs
  const loginInputs = [
    {
      controlId: 'formBasicEmail',
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter Email Address',
      name: 'email',
      value: loginInputValues.email,
      onChange: handleChange(loginInputValues, setLoginInputValues)
    },
    {
      controlId: 'formBasicPassword',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      name: 'password',
      value: loginInputValues.password,
      onChange: handleChange(loginInputValues, setLoginInputValues)
    }
  ]

  const registerInputs = [
    {
      controlId: 'formBasicUsername',
      type: 'text',
      label: 'Username',
      placeholder: 'Enter Username',
      name: 'username',
      value: registerInputValues.username,
      onChange: handleChange(registerInputValues, setRegisterInputValues)
    },
    {
      controlId: 'formBasicEmail',
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter Email Address',
      name: 'email',
      value: registerInputValues.email,
      onChange: handleChange(registerInputValues, setRegisterInputValues)
    },
    {
      controlId: 'formBasicPassword',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      name: 'password',
      value: registerInputValues.password,
      onChange: handleChange(registerInputValues, setRegisterInputValues)
    }
  ]

  // Computed
  const formType = loginForm ? 'Login' : 'Register'
  const linkText = loginForm ? 'Dont have an account yet?' : 'Already have an account?'
  const inputList = loginForm ? loginInputs : registerInputs
  const customForm = <CustomForm inputList={inputList} submitButtonText={formType} onSubmit={handleSubmit} />

  // Functions
  function handleChange (event, hookState, hookFunction) {
    console.log(event.target)
  }

  function changeForm () {
    setLoginForm(!loginForm)
  }

  function handleSubmit (event) {
    event.preventDefault()
    if (loginForm) {
      alert('Login form')
    }
  }

  return (
    <div className="login-register d-flex flex-column align-items-center justify-content-center">
      <h1>{formType}</h1>
      <img
        src={logo}
        className="login-register__logo my-5"
        alt="Spinning book"
      />
      {customForm}
      <Link
        to="#"
        className="mt-4"
        onClick={changeForm}
      >
        {linkText}
      </Link>
    </div>
  )
}


export default LoginOrRegister;
