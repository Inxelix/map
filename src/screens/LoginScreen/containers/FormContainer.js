import React from 'react';

import {
  Fields,
  Button,
} from '../../../containers';
import {
  ContentWrapper,
} from '../../../components';


export const FormContainer = ({
  fields,
  onChangeText,
  getCurrentValue,
  onButtonPress,
  text,
}) => (
  <ContentWrapper>
    <Fields
      fields={fields}
      onChangeText={onChangeText}
      getCurrentValue={getCurrentValue}
    />

    <Button
      onButtonPress={onButtonPress}
      text={text}
    />
  </ContentWrapper>
);
