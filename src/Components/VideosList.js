import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  List,
  Card,
  Button,
  CardItem
} from 'native-base';
import VideoItem from './VideoItem';
import { favoriteVideo } from '../Actions/dashboardActions';

class VideosList extends Component {

  componentWillMount() {
    console.log(this.props.videos);
  }


  renderButton(video) {
    if (video.favorite) {
      return <Text>Hit me</Text>;
    }
    return (
      <Button block onPress={this.props.favoriteVideo(video)}>
        <Text style={styles.buttonTextStyle}>Favorite</Text>
      </Button> 
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <List 
            dataArray={this.props.videos}
            renderRow={(video) => 
              <Card>
                <CardItem>
                  <VideoItem 
                    video={video}
                  />
                </CardItem>

                <CardItem>
                 {this.renderButton(video)}
                </CardItem>
              </Card>
            } 
          />
        </Content>
      </Container>
    );
  }
}

const styles = {
    buttonTextStyle: {
    fontSize: 18,
    color: 'white'
  }
};

const mapStateToProps = (state) => ({ videos: state.dashboard.videos });

export default connect(mapStateToProps, { favoriteVideo })(VideosList);
