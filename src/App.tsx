import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Activity } from './app/models/activity';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = React.useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities')
      .then(response => {
        console.log(response);
        setActivities(response.data);
      })
  }, [])

  return (
    <div>
      <Header as='h2' icon='users' content='Reactivities'></Header>
      <List>
        {activities.map((activity: Activity) =>
          <List.Item key={activity.id}>
            {activity.title}
          </List.Item>
        )}
      </List>
  </div>
  );
}

export default App;
