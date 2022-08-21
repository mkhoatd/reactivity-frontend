import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Activity } from '../../app/models/activity'

type Props = {
  activity: Activity
  cancelSelectActivity: () => void
}

const ActivityDetail = ({activity, cancelSelectActivity}: Props) => {
  const imagePath = `/assets/categoryImages/${activity.category}.jpg`
  return (
    <Card fluid>
      <Image src={imagePath} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date?.toString()}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths='2'>
          <Button basic color='blue' content='Edit' />
          <Button basic color='grey' content='Cancel' />
        </Button.Group>
      </Card.Content>
    </Card>
  )
}

export default ActivityDetail
