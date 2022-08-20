import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

type Props = {}

const ActivityFrom = (props: Props) => {
  return (
    <Form clearing>
      <Form.Input placeholder='Title'></Form.Input>
      <Form.Input placeholder='Description'></Form.Input>
      <Form.Input placeholder='Category'></Form.Input>
      <Form.Input placeholder='Date'></Form.Input>
      <Form.Input placeholder='City'></Form.Input>
      <Form.Input placeholder='Venue'></Form.Input>
      <Button floated='right' positive type='submit' content='Submit' />
      <Button floated='right' type='button' content='Cancel' />
    </Form>
  )
}

export default ActivityFrom
