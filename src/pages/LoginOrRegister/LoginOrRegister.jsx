import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './LoginOrRegister.css'
<<<<<<< HEAD
import CustomForm from '../../components/CustomForm/CustomForm'

function LoginOrRegister () {

=======
import AppForm from '../../components/AppForm/AppForm'

function LoginOrRegister () {
>>>>>>> dev
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
<<<<<<< HEAD
      onChange: () => handleChange(loginInputValues, setLoginInputValues)
=======
      onChange: handleChange
>>>>>>> dev
    },
    {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      name: 'password',
<<<<<<< HEAD
      onChange: () => handleChange(loginInputValues, setLoginInputValues)
=======
      onChange: handleChange
>>>>>>> dev
    }
  ]

  const registerInputs = [
    {
      type: 'text',
      label: 'Username',
      placeholder: 'Enter Username',
      name: 'username',
<<<<<<< HEAD
      onChange: () => handleChange(registerInputValues, setRegisterInputValues)
=======
      onChange: handleChange
>>>>>>> dev
    },
    {
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter Email Address',
      name: 'email',
<<<<<<< HEAD
      onChange: () => handleChange(registerInputValues, setRegisterInputValues)
=======
      onChange: handleChange
>>>>>>> dev
    },
    {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      name: 'password',
<<<<<<< HEAD
      onChange: () => handleChange(registerInputValues, setRegisterInputValues)
=======
      onChange: handleChange
>>>>>>> dev
    }
  ]

  // Computed
  const formType = loginForm ? 'Login' : 'Register'
  const linkText = loginForm ? 'Dont have an account yet?' : 'Already have an account?'
  const inputList = loginForm ? loginInputs : registerInputs

  // Functions
  function handleChange (event, hookState, hookFunction) {
<<<<<<< HEAD
    hookFunction({...hookState, [event.target.name]: event.target.value})
  }

  function changeForm () {
=======
    const { name, value } = event.target
    console.log(name, value)
    if (loginForm) {
      setLoginInputValues( {...loginInputValues, [name]: value} )
    } else {
      setRegisterInputValues( {...registerInputValues, [name]: value } )
    }
  }

  function changeForm (event) {
>>>>>>> dev
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
<<<<<<< HEAD
      <CustomForm inputList={inputList} submitButtonText={formType} onSubmit={handleSubmit} />
=======
    <AppForm inputList={inputList} submitButtonText={formType} onSubmit={handleSubmit} />
>>>>>>> dev
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
