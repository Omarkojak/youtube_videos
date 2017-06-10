import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Content,
  List,
  Card,
  CardItem
} from 'native-base';
import FavoriteVideoItem from './FavoriteVideoItem';
import { fetchFavoriteVideos } from '../Actions/dashboardActions';

class FavoritesVideosList extends Component {

  componentWillMount() {
    this.props.fetchFavoriteVideos();
    console.log('mount', this.props.favoriteVideos);
  }

  render() {
    console.log('render', this.props.favoriteVideos);
    return (
      <Container>
        <Content>
          <List 
            dataArray={this.props.favoriteVideos}
            renderRow={(video) => 
              <Card>
                <CardItem>
                  <FavoriteVideoItem 
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

const mapStateToProps = (state) => {
  const videos = _.map(state.dashboard.favoriteVideos, (val, uid) => ({ ...val, uid }));
  return { favoriteVideos: videos };
};

export default connect(mapStateToProps, { fetchFavoriteVideos })(FavoritesVideosList);
