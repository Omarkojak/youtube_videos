import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  List
} from 'native-base';
import VideoItem from './VideoItem';

class VideosList extends Component {

  componentWillMount() {
    console.log(this.props.videos);
  }

  render() {
    return (
      <Container>
        <Content>
          <List 
            dataArray={this.props.videos}
            renderRow={(video) => 
              <VideoItem 
                video={video}
              />
            } 
          />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ videos: state.dashboard.videos });

export default connect(mapStateToProps)(VideosList);
