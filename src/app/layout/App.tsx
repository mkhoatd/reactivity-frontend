import React, {useEffect} from "react";
import axios from "axios";
import {Activity} from "../models/activity";
import {Container} from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../feature/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = React.useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = React
    .useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = React.useState(false);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => {
        console.log(response);
        setActivities(response.data);
      });
  }, []);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find((a) => a.id === id));
  }

  function handleCancelSelectedActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectedActivity();
    setEditMode(true);
  }

  function handleFromClose() {
    setEditMode(false);
  }

  return (
    <>
      <NavBar openForm={handleFormOpen}/>
      <Container style={{marginTop: "7em"}}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectedActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFromClose}
        />
      </Container>
    </>
  );
}

export default App;
