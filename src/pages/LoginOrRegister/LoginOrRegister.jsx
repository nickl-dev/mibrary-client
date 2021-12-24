import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './LoginOrRegister.css'
import CustomForm from '../../components/CustomForm/CustomForm'

function LoginOrRegister () {

  const loginInputs = [
    {
      controlId: 'formBasicEmail',
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter Email Address',
      name: 'email'
    },
    {
      controlId: 'formBasicPassword',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      name: 'password'
    }
  ]

  const registerInputs = [
    {
      type: 'text',
      label: 'Username',
      placeholder: 'Enter Username',
      name: 'username'
    },
    {
      controlId: 'formBasicEmail',
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter Email Address',
      name: 'email'
    },
    {
      controlId: 'formBasicPassword',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter Password',
      name: 'password'
    }
  ]

  const [loginForm, setLoginForm] = useState(true)

  const customForm = <CustomForm inputList={loginForm ? loginInputs : registerInputs} submitButtonText={loginForm ? 'Login' : 'Register'} />

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

  function handleSubmit () {}

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
