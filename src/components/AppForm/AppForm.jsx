import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './AppForm.css'

function AppForm (props) {
  const inputs = props.inputList.map((input, index) => {
    return (
      <Form.Group
        className="mb-3"
        key={index}
      >
        <Form.Label>{input.label}</Form.Label>
        <Form.Control
          type={input.type}
          placeholder={input.placeholder}
          name={input.name}
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

export default AppForm
