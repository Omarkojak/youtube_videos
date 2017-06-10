import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './Components/LoginForm';
import Dashboard from './Components/Dashboard';
import VideosList from './Components/VideosList';
import FavoriteVideosList from './Components/FavoritesVideosList';
import IFrame from './Components/IFrame';

const RouterComponent = () => (
    <Router sceneStyle={{ paddingTop: 65 }}>

      <Scene key="auth">
        <Scene 
          key="login"
          component={LoginForm}
          title="Youtube Favorites"
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
          component={VideosList}
          title="Videos"
        />
        <Scene 
          key="favoriteVideos"
          component={FavoriteVideosList}
          title="Favorites"
        />
        <Scene 
          key="iframe"
          component={IFrame}
          title="Watch"
        />
      </Scene>

    </Router>
);

export default RouterComponent;
