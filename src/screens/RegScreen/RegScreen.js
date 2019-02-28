import React, { PureComponent } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import {
  ContentWrapper,
} from '../../components';
import {
  FormContainer,
  RegTitleContainer,
} from './containers';
import {
  colors,
  MAIN_STACK,
} from '../../constants';


type Props = {};

export default class LoginScreen extends PureComponent<Props> {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      password: '',      
      passwordConfirm: '',
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
      register,
    } = this.props;
    const {
      phone,
      password,
      passwordConfirm,
    } = this.state;

    if (password === passwordConfirm) {
      register(phone, password);
    } else {
      alert('Пароли не совпадают');
    }
  };

  getCurrentValue = (fieldName) => {
    return this.state[fieldName];
  };

  render() {
    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
      <ContentWrapper 
        style={{alignItems: 'center'}}
      >
        <RegTitleContainer
          title="Регистрация"
        />
        <FormContainer
          fields={[
            'phone',
            'password',
            'passwordConfirm',
          ]}
          onChangeText={this.handleInputChange}
          getCurrentValue={this.getCurrentValue}
          onButtonPress={this.onButtonPress}
          text="Зарегаться"
        />
      </ContentWrapper>
      </KeyboardAvoidingView>
    );
  }
}

LoginScreen.defaultProps = {
};

LoginScreen.navigationOptions = {
  header: null,
};