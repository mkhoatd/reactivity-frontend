import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../app/models/activity";
import ActivityDetail from "../details/ActivityDetail";
import ActivityFrom from "../form/ActivityForm";
import ActivityList from "./ActivityList";

type Props = {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
};

const ActivityDashboard = ({ activities, selectedActivity,
  selectActivity, cancelSelectActivity }: Props) => {

  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </Grid.Column>
      <Grid.Column width='6'>
        {selectedActivity && <ActivityDetail activity={selectedActivity} cancelSelectActivity={cancelSelectActivity} />}
        <ActivityFrom/>
      </Grid.Column>
    </Grid>
  );
};

export default ActivityDashboard;
