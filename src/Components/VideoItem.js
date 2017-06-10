import React, { Component } from 'react';
import { Image, TouchableWithoutFeedback, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { CardItem, Text, Card, Button, Spinner } from 'native-base';
import { favoriteVideo } from '../Actions/dashboardActions';

class VideoItem extends Component {

  onButtonPress() {
    this.props.favoriteVideo(this.props.video);
  }

  renderButton() {
    if (this.props.loadingFavorite) {
      return <Spinner color='blue' />;
    }
    if (this.props.video.favorite) {
      return (
        <Button disabled>
          <Text style={styles.buttonTextStyle}>Added to favorites</Text>
        </Button>);
    }
    return (
      <Button block onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.buttonTextStyle}>Add to favorites</Text>
      </Button>
    );
  }

  render() {
    const { snippet, id } = this.props.video;
    const { publishedAt, title, description, thumbnails, channelTitle } = snippet;
    
    const { imageStyle, cardContentContainerStyle } = styles;

    return (
      <Card>
        
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

          </Card>
        </TouchableWithoutFeedback>

        <CardItem style={{ justifyContent: 'center' }}>
              {this.renderButton()}
        </CardItem>

      </Card>
      
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

const mapStateToProps = (state) => ({
  loadingFavorite: state.dashboard.loadingFavorite
});

export default connect(mapStateToProps, { favoriteVideo })(VideoItem);
