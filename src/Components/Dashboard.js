import firebase from 'firebase';
import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { 
  Header, 
  Item, 
  Icon, 
  Input, 
  Container, 
  Content, 
  Button,
  Footer,
  FooterTab
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

  onLogoutPress() {
    firebase.auth().signOut();
    Actions.auth({
      type: 'reset'
    });
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
          <View>
            <Button block onPress={this.onFavoritesPress.bind(this)}>
              <Text style={styles.buttonTextStyle}>Favorites</Text>
            </Button>
          </View>
          
          <View style={{ marginTop: 80 }}>
            <Text style={styles.welcomeTextStyle}>
              Welcome to Youtube Favorites!
            </Text>
          </View>

        </Content>

        <Footer>
          <FooterTab>
            <Button block onPress={this.onLogoutPress.bind(this)}>
              <Text style={styles.buttonTextStyle}>Logout</Text>
            </Button>
          </FooterTab>
        </Footer>

        
      </Container>
    );
  }
}

const styles = {
    buttonTextStyle: {
    fontSize: 18,
    color: 'white'
  },
  welcomeTextStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
};

const mapStateToProps = (state) => ({ searchText: state.dashboard.searchText });

export default connect(mapStateToProps, { searchDataChange, searchYoutube })(Dashboard);
