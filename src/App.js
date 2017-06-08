import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

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
            <View>
                <Text>Hello!</Text>
            </View>
        );
    }
}

export default App;
