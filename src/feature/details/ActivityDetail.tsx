import React from 'react'
import {Button, Card, Image} from 'semantic-ui-react'
import {useStore} from "../../app/stores/store";

type Props = {}

const ActivityDetail = ({}: Props) => {
  const {activityStore} = useStore();
  const {selectedActivity: activity, openForm, cancelSelectActivity} = activityStore;

  if (!activity) return <></>;

  const imagePath = `/assets/categoryImages/${activity.category}.jpg`;

  return (
    <Card fluid>
      <Image src={imagePath}/>
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date?.toString()}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths='2'>
          <Button onClick={() => openForm(activity.id)} basic color='blue' content='Edit'/>
          <Button onClick={cancelSelectActivity} basic color='grey' content='Cancel'/>
        </Button.Group>
      </Card.Content>
    </Card>
  )
}

export default ActivityDetail
