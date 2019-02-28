import React, { PureComponent } from 'react';
import Modal from "react-native-modal";
import { Text, TouchableOpacity, View, AsyncStorage } from "react-native";

import {
  ContentWrapper,
} from '../../components';
import {
  FormContainer,
  RegTitleContainer,
  RegBottomContainer,
} from './containers';
import {
  colors,
  MAIN_STACK,
  REG_SCREEN,
} from '../../constants';


type Props = {};

export default class LoginScreen extends PureComponent<Props> {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      password: '',
      error: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.fetching) {
      return;
    }

    if (nextProps.error) {
      alert(nextProps.error);
    } else {
      this.goToMap();
    }
  }

  async componentWillMount() {
    const { navigation } = this.props;
    if (await AsyncStorage.getItem('jwt')) {
      navigation.navigate(MAIN_STACK);
    };
  }

  goToMap = () => {
    const { navigation } = this.props;

    navigation.navigate(MAIN_STACK);
  };

  handleInputChange = (fieldName, text) => {
    this.setState(
      {
        [fieldName]: text,
      },
    );
  };

  onButtonPress = () => {
    const {
      login,
    } = this.props;
    const {
      phone,
      password,
    } = this.state;

    login(phone, password);    
  };

  onRegPress = () => {
    const { navigation } = this.props;

    navigation.navigate(REG_SCREEN);
  };

  getCurrentValue = (fieldName) => {
    return this.state[fieldName];
  };

  render() {
    return (
      <ContentWrapper
        style={{alignItems: 'center'}}
      >
        <RegTitleContainer
          title="Вход"
        />
        <FormContainer
          fields={[
            'phone',
            'password',
          ]}
          onChangeText={this.handleInputChange}
          getCurrentValue={this.getCurrentValue}
          onButtonPress={this.onButtonPress}
          text="Войти"
        />
        
        <RegBottomContainer 
          onPress = {this.onRegPress}
          text="Зарегистрироваться"
        />
      </ContentWrapper>
    );
  }
}

LoginScreen.defaultProps = {
};

LoginScreen.navigationOptions = {
  header: null,
};