import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { 
  Header, 
  Item, 
  Icon, 
  Input, 
  Container, 
  Content, 
  Button 
} from 'native-base';
import { 
  searchDataChange,
  searchYoutube 
} from '../Actions/dashboardActions';


class Dashboard extends Component {

  onPressSearch() {
    this.props.searchYoutube(this.props.searchText);
  }

  onChangeText(value) {
    this.props.searchDataChange(value);
  }

  onFavoritesPress() {
    Actions.favoriteVideos();
  }

  render() {
    return (
      <Container>

        <Header searchBar rounded>
            <Item style={{ flex: 7 }}>
              <Icon name="ios-search" />
              <Input 
                placeholder="Search" 
                value={this.props.searchText}
                onChangeText={this.onChangeText.bind(this)}
              />
            </Item>
            
            <Item style={{ flex: 1 }}>
              <TouchableOpacity onPress={this.onPressSearch.bind(this)}>
                <Icon acitve name='arrow-forward' />
              </TouchableOpacity>
            </Item>
        </Header>  

        <Content>
          <Button block onPress={this.onFavoritesPress.bind(this)}>
            <Text style={styles.buttonTextStyle}>Favorites</Text>
          </Button>
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

const mapStateToProps = (state) => ({ searchText: state.dashboard.searchText });

export default connect(mapStateToProps, { searchDataChange, searchYoutube })(Dashboard);
