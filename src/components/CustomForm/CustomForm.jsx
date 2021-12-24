import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './CustomForm.css'

function CustomForm (props) {
  const inputList = props.inputList

  const inputs = inputList.map(input => {
    return (
      <Form.Group className="mb-3" controlId={input.controlId}>
        <Form.Label>{input.label}</Form.Label>
        <Form.Control type={input.type} placeholder={input.placeholder} />
      </Form.Group>
    )
  })

  return (
    <Form>
      {inputs}
      <Button variant="primary" type="submit" className="submit">
        {props.submitButtonText}
      </Button>
    </Form>
  )
}

export default CustomForm
