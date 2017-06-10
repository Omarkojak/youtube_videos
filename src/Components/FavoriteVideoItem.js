import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
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
    const { publishedAt, title, description, thumbnails, channelTitle } = snippet;
    
    const { imageStyle, cardContentContainerStyle } = styles;

    return (
      <TouchableWithoutFeedback 
        onPress={() => Actions.iframe({ id })}
      >
        <Card>
          <CardItem>
              <Image
                style={imageStyle}
                source={{ uri: thumbnails.medium.url }}
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
      </TouchableWithoutFeedback>

    );
  }
}

const styles = {
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  cardContentContainerStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start'
  },
  buttonTextStyle: {
    fontSize: 18,
    color: 'white'
  }
};

export default connect(null, { unfavoriteVideo })(FavoriteVideoItem);
