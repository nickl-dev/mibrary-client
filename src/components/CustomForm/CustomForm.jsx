import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './CustomForm.css'

function CustomForm (props) {
  const inputList = props.inputList

  const inputs = inputList.map((input, index) => {
    return (
      <Form.Group
        className="mb-3"
        controlId={input.controlId}
        key={index}
      >
        <Form.Label>{input.label}</Form.Label>
        <Form.Control
          type={input.type}
          placeholder={input.placeholder}
          name={input.name}
          value={input.value}
          onChange={input.onChange}
        />
      </Form.Group>
    )
  })

  return (
    <Form onSubmit={props.onSubmit}>
      {inputs}
      <Button
        variant="primary"
        type="submit"
        className="submit"
      >
        {props.submitButtonText}
      </Button>
    </Form>
  )
}

export default CustomForm
