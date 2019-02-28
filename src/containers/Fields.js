import React from 'react';
import PropTypes from 'prop-types';

import {
  FieldsWrapper,
} from '../components';
import { InputField } from './InputField';


export const Fields = ({
  fields,
  onChangeText,
  getCurrentValue,
}) => (
  <FieldsWrapper
    overflow="hidden"
  >
    {
      fields.map((name, index) => (
        <InputField
          key={index}
          name={name}
          value={getCurrentValue(name)}
          onChangeText={text => onChangeText(name, text)}
        />
      ))
    }
  </FieldsWrapper>
);

Fields.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeText: PropTypes.func.isRequired,
  getCurrentValue: PropTypes.func.isRequired,
};

Fields.defaultProps = {
  fields: [
    'phone',
    'password'
  ],
  onChangeText: () => {},
  getCurrentValue: () => {},
};
