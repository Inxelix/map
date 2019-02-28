import React from 'react';
import PropTypes from 'prop-types';

import {
  FieldsInput,
  InputComponent,
} from '../components';


const fields = {
  phone: {
    params: {
      placeholder: 'Телефон',
      keyboardType: 'phone-pad',
      maxLength: 13,
    },
  },

  password: {
    params: {
      placeholder: 'Пароль',
      autoCorrect: false,
      autoCapitalize: 'none',
      secureTextEntry: true,
    },
  },

  passwordConfirm: {
    params: {
      placeholder: 'Подтвердите пароль',
      autoCorrect: false,
      autoCapitalize: 'none',
      secureTextEntry: true,
    },
  },
};

export const InputField = ({ name, ...otherProps }) => {
  const {
    params,
  } = fields[name];

  return (
    <FieldsInput>
      <InputComponent
        {...params}
        {...otherProps}
      />
    </FieldsInput>
  );
};


InputField.propTypes = {
  name: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

InputField.defaultProps = {
  name: 'phoneField',
  onChangeText: () => {},
  value: '',
};
