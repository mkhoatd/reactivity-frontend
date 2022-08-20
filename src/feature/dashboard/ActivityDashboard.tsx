import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../app/models/activity";
import ActivityDetail from "../details/ActivityDetail";
import ActivityFrom from "../form/ActivityForm";
import ActivityList from "./ActivityList";

type Props = {
  activities: Activity[];
};

const ActivityDashboard = ({activities}: Props) => {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList activities={activities} />
      </Grid.Column>
      <Grid.Column width='6'>
        {activities[0] && <ActivityDetail activity={activities[0]} />}
        <ActivityFrom/>
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
