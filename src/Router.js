import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard';
import videosList from './Components/VideosList';

const RouterComponent = () => (
    <Router sceneStyle={{ paddingTop: 65 }}>

      <Scene key="auth">
        <Scene 
          key="login"
          component={LoginForm}
          title="App Name"
        />
      </Scene>

      <Scene key="main">
        <Scene 
          key="dashboard"
          component={Dashboard}
          title="Dashboard"
          initial
        />
        <Scene 
          key="videosList"
          component={videosList}
          title="Videos"
        />
      </Scene>

    </Router>
);

export default RouterComponent;
