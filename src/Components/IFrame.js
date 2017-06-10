import React from 'react';
import { WebView } from 'react-native';

const IFrame = ({ id }) => (
    <WebView 
      source={{ uri: `http://www.youtube.com/embed/${id.videoId}` }}
      style={styles.videoContainerStyle}
    />
);

const styles = {
  videoContainerStyle: {
    width: null, 
    height: 300, 
    position: 'relative'
  }
};

export default IFrame;
