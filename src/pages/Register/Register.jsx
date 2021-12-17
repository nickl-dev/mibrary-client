import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import logo from '../../logo.svg';
import './Register.css'

function Register () {

  const [data, setData] = useState([])



  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(process.env.REACT_APP_API_BASE_URL)
      .then((response) => setData(response)).catch(err => console.error(err))
    }
    fetchData()
    console.log(data)
  }, [])

  return (
    <div className="register d-flex flex-column align-items-center justify-content-center">
      <h1 className="register__heading">Register</h1>

    <img src={logo} className="logo my-5" />

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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
