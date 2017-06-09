import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Header, Item, Icon, Input, Container } from 'native-base';
import { connect } from 'react-redux';
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
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({ searchText: state.dashboard.searchText });

export default connect(mapStateToProps, { searchDataChange, searchYoutube })(Dashboard);
