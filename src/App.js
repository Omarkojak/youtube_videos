import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './Reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
      const config = {
        apiKey: 'AIzaSyAb5j-aH5EoUJyg1bCLJgVfAWCQ9mxsBCw',
        authDomain: 'youtubevideos-6f61b.firebaseapp.com',
        databaseURL: 'https://youtubevideos-6f61b.firebaseio.com',
        projectId: 'youtubevideos-6f61b',
        storageBucket: 'youtubevideos-6f61b.appspot.com',
        messagingSenderId: '252554071609'
      };
      firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}

export default App;
