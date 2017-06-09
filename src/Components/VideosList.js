import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class VideosList extends Component {

  componentWillMount() {
    console.log(this.props.videos);
  }

  render() {
    return (
      <View>
        <Text>List here !!</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({ videos: state.dashboard.videos });

export default connect(mapStateToProps)(VideosList);
