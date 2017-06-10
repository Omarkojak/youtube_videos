import React, { Component } from 'react';
import { WebView } from 'react-native';
import { connect } from 'react-redux';
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
    const { publishedAt, title, description, channelTitle } = snippet;
    
    const { cardContentContainerStyle, videoContainerStyle } = styles;

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
            {this.renderButton()}
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

const mapStateToProps = (state) => ({
  loadingFavorite: state.dashboard.loadingFavorite
});

export default connect(mapStateToProps, { favoriteVideo })(VideoItem);
