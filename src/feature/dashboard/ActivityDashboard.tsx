import React from "react";
import {Grid} from "semantic-ui-react";
import ActivityDetail from "../details/ActivityDetail";
import ActivityFrom from "../form/ActivityForm";
import ActivityList from "./ActivityList";
import {useStore} from "../../app/stores/store";
import {observer} from "mobx-react-lite";

type Props = {};

const ActivityDashboard = ({}: Props) => {

  const {activityStore} = useStore();
  const {selectedActivity, editMode} = activityStore;
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList/>
      </Grid.Column>
      <Grid.Column width='6'>
        {selectedActivity && !editMode &&
          <ActivityDetail/>}
        {editMode && <ActivityFrom/>}
      </Grid.Column>
    </Grid>
  );
};

export default observer(ActivityDashboard);
