import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { ducks } from './demo';
import DuckItem from './DuckItem';
import axios from 'axios';
import { Activity } from './app/models/activity';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>
            {activities.map((activity: Activity) => (
              <li key={activity.id}>
                {activity.title}
              </li>
            ))}
          </li>
        </ul>

      </header>
    </div>
  );
}

export default App;
