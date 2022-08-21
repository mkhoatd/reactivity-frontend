import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import {Activity} from "../../app/models/activity";

type Props = {
  activity: Activity | undefined;
  closeForm: () => void;
};

const ActivityFrom = ({activity, closeForm}: Props) => {
  return (
    <Segment clearing>
      <Form>
        <Form.Input placeholder="Title"></Form.Input>
        <Form.Input placeholder="Description"></Form.Input>
        <Form.Input placeholder="Category"></Form.Input>
        <Form.Input placeholder="Date"></Form.Input>
        <Form.Input placeholder="City"></Form.Input>
        <Form.Input placeholder="Venue"></Form.Input>
        <Button floated="right" positive type="submit" content="Submit" />
        <Button onClick={closeForm} floated="right" type="button" content="Cancel" />
      </Form>
    </Segment>
  );
};

export default ActivityFrom;
