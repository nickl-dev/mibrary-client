import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './LoginOrRegister.css'
import CustomForm from '../../components/CustomForm/CustomForm'

function LoginOrRegister () {

  // State
  const [loginForm, setLoginForm] = useState(true)
  const [loginInputValues, setLoginInputValues] = useState({
    email: null,
    password: null
  })
  const [registerInputValues, setRegisterInputValues] = useState({
    username: null,
    email: null,
    password: null
  })

  // Inputs
  const loginInputs = [
    {
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter Email Address',
      name: 'email',
      onChange: () => handleChange(loginInputValues, setLoginInputValues)
    },
    {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      name: 'password',
      onChange: () => handleChange(loginInputValues, setLoginInputValues)
    }
  ]

  const registerInputs = [
    {
      type: 'text',
      label: 'Username',
      placeholder: 'Enter Username',
      name: 'username',
      onChange: () => handleChange(registerInputValues, setRegisterInputValues)
    },
    {
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter Email Address',
      name: 'email',
      onChange: () => handleChange(registerInputValues, setRegisterInputValues)
    },
    {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      name: 'password',
      onChange: () => handleChange(registerInputValues, setRegisterInputValues)
    }
  ]

  // Computed
  const formType = loginForm ? 'Login' : 'Register'
  const linkText = loginForm ? 'Dont have an account yet?' : 'Already have an account?'
  const inputList = loginForm ? loginInputs : registerInputs

  // Functions
  function handleChange (event, hookState, hookFunction) {
    hookFunction({...hookState, [event.target.name]: event.target.value})
  }

  function changeForm () {
    setLoginForm(!loginForm)
  }

  function handleSubmit (event) {
    event.preventDefault()

    if (loginForm && checkObjectValues(loginInputValues)) {
      alert('Login form')
      axios.get(process.env.REACT_APP_API_BASE_URL)
      .then(res => console.log(res))
      .catch(err => console.error(err))
    } else if (!loginForm && checkObjectValues(registerInputValues)) {
      alert('Register form')
      axios.post(process.env.REACT_APP_API_BASE_URL, registerInputValues)
      .then(res => console.log(res))
      .catch(err => console.error(err))
    }
  }

  function checkObjectValues (object) {
    for (const property in object) {
      if (!object[property]) {
        return false
      } else {
        return true
      }
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
      <CustomForm inputList={inputList} submitButtonText={formType} onSubmit={handleSubmit} />
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
