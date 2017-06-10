import React, { Component } from 'react';
import { 
  Container, 
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Spinner
} from 'native-base';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { loginDataChange, loginUser } from '../Actions/authActions';

class LoginForm extends Component {

  onChangeEmail(value) {
    this.props.loginDataChange({ prop: 'email', value });
  }

  onChangePassword(value) {
    this.props.loginDataChange({ prop: 'password', value });
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderLoading() {
    if (this.props.loading) {
      return <Spinner color='blue' />;
    }

    return (
      <Button block onPress={this.onButtonPress.bind(this)}>
        <Text style={styles.buttonTextStyle}>Login</Text>
      </Button>  
    );
  }

  render() {
    const { buttonContainerStyle, errorTextStyle } = styles;

    return (
      <Container>
        <Content>
          <Form>

            <Item fixedLabel>
              <Label>Email</Label>
              <Input 
                placeholder="example@me.com"
                value={this.props.email}
                onChangeText={this.onChangeEmail.bind(this)}
                autoCorrect={false}
              />
            </Item>

            <Item fixedLabel last>
              <Label>Password</Label>
              <Input 
                secureTextEntry 
                placeholder="password"
                value={this.props.password}
                onChangeText={this.onChangePassword.bind(this)}
                autoCorrect={false}
              />
            </Item>
            
            <View style={{ paddingTop: 20 }}>
              <Text style={errorTextStyle}>
                {this.props.error}
              </Text>
            </View>

            <View style={buttonContainerStyle}>
              {this.renderLoading()}
            </View>

          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = {
  buttonTextStyle: {
    fontSize: 18,
    color: 'white'
  },
  buttonContainerStyle: {
    paddingTop: 40,
    marginLeft: 15,
    marginRight: 15
  },
  errorTextStyle: {
    color: 'red',
    fontSize: 18,
    alignSelf: 'center'
  }
};

const mapToStateProps = (state) => {
  const { email, password, loading, error } = state.auth;
  return { email, password, loading, error };
};

export default connect(mapToStateProps, {
  loginDataChange,
  loginUser
})(LoginForm);
