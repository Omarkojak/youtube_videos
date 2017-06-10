import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  List,
  Card,
  CardItem
} from 'native-base';
import VideoItem from './VideoItem';

class VideosList extends Component {

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

              </Card>
            } 
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ videos: state.dashboard.videos });

export default connect(mapStateToProps)(VideosList);
