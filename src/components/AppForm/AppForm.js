import React from 'react'
import { Form, Button } from 'react-bootstrap'
import './AppForm.scss'

function AppForm (props) {
  const inputs = props.inputList.map((input, index) => {
    return (
      <Form.Group
        className="mb-3"
        key={index}
      >
        <Form.Label className="mb-0">{input.label}</Form.Label>
        <Form.Control
          type={input.type}
          controlid={input.controlId}
          placeholder={input.placeholder}
          name={input.name}
          value={input.value}
          onChange={input.onChange}
        />
      </Form.Group>
    )
  })

  return (
    <Form
      className="w-100 px-3 form"
      onSubmit={props.onSubmit}
    >
      {inputs}
      <Button
        variant="dark"
        type="submit"
      >
        {props.submitButtonText}
      </Button>
    </Form>
  )
}

export default AppForm;
