import React, { Component } from 'react';
import { connect } from 'react-redux';
import { WebView } from 'react-native';
import { CardItem, Text, Card, Button } from 'native-base';
import { unfavoriteVideo } from '../Actions/dashboardActions';

class FavoriteVideoItem extends Component {

  componentWillMount() {
    console.log('item', this.props.video);
  }

  onButtonPress() {
    const { uid } = this.props.video;
    this.props.unfavoriteVideo(uid);
  }

  render() {
    const { snippet, id } = this.props.video;
    const { publishedAt, title, description, channelTitle } = snippet;
    
    const { videoContainerStyle, cardContentContainerStyle } = styles;

    return (

        <Card>
          <CardItem>
            <WebView 
              source={{ uri: `http://www.youtube.com/embed/${id.videoId}` }}
              style={videoContainerStyle}

            />
          </CardItem>

          <CardItem style={cardContentContainerStyle}>
            <Text>{title}</Text>
            <Text note>{publishedAt}</Text>
            <Text note>{channelTitle}</Text>
            <Text>{description}</Text>
          </CardItem>
          
          <CardItem style={{ justifyContent: 'center' }}>
            <Button block onPress={this.onButtonPress.bind(this)}>
              <Text style={styles.buttonTextStyle}>Remove from favorites</Text>
            </Button>
          </CardItem>

        </Card>

    );
  }
}

const styles = {
  cardContentContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  buttonTextStyle: {
    fontSize: 18,
    color: 'white'
  },
  videoContainerStyle: {
    width: null, 
    height: 300, 
    position: 'relative'
  }
};

export default connect(null, { unfavoriteVideo })(FavoriteVideoItem);
