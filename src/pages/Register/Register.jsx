import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logo from '../../logo.svg';
import axios from 'axios'
import './Register.css'

function Register () {

  const [userInputs, setUserInputs] = useState({
    username: '',
    email: '',
    password: ''
  })

  function handleChange (event) {
    const { name, value } = event.target
    setUserInputs({ ...userInputs, [name]: value })
    console.log(name, value)
  }

  async function handleSubmit (event) {
    event.preventDefault()
    if (userInputs) {
      try {
        await axios.post(`${process.env.REACT_APP_API_BASE_URL}register`, userInputs)
        .then(res => console.log(res))
        .catch(err => console.error(err))
      } catch (err) {
        console.error(err)
      }
    } else return
  }

  return (
    <div className="register d-flex flex-column align-items-center justify-content-center">
      <h1 className="register__heading">Register</h1>

    <img src={logo} className="logo my-5" alt="Spinning book" />

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" name="username" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>

      <Link to='/' className="mt-4">Already Have an Account?</Link>
    </div>
  )
}

export default Register;
