import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './LoginOrRegister.css'
import AppForm from '../../components/AppForm/AppForm'

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
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter Email Address',
      name: 'email',
      onChange: handleChange
    },
    {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      name: 'password',
      onChange: handleChange
    }
  ]

  const registerInputs = [
    {
      type: 'text',
      label: 'Username',
      placeholder: 'Enter Username',
      name: 'username',
      onChange: handleChange
    },
    {
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter Email Address',
      name: 'email',
      onChange: handleChange
    },
    {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      name: 'password',
      onChange: handleChange
    }
  ]

  // Computed
  const formType = loginForm ? 'Login' : 'Register'
  const linkText = loginForm ? 'Dont have an account yet?' : 'Already have an account?'
  const inputList = loginForm ? loginInputs : registerInputs

  // Functions
  function handleChange (event) {
    const { name, value } = event.target
    console.log(event)
    if (loginForm) {
      setLoginInputValues( {...loginInputValues, [name]: value} )
    } else {
      setRegisterInputValues( {...registerInputValues, [name]: value } )
    }
  }

  function changeForm (event) {
    setLoginForm(!loginForm)
  }

  function handleSubmit (event) {
    event.preventDefault()
    if (loginForm && checkObjectValues(loginInputValues)) {
      axios.post(process.env.REACT_APP_API_BASE_URL, loginInputValues)
      .then(res => console.log(res))
      .catch(err => console.error(err))
    }
    if (!loginForm && checkObjectValues(registerInputValues)) {
      axios.post(process.env.REACT_APP_API_BASE_URL, registerInputValues)
      .then(res => console.log(res))
      .catch(err => console.error(err))
    }
  }

  function checkObjectValues (object) {
    for (const property in object) {
      if (!object[property]) {
        return false
      } else return true
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
      <AppForm inputList={inputList} submitButtonText={formType} onSubmit={handleSubmit} />
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
