import styled from 'styled-components';
import {
  scale,
  verticalScale,
} from 'react-native-size-matters';

import { colors } from '../constants';


export const FieldsInput = styled.View`
  width: 100%;
  height: ${verticalScale(50)};
  flex-direction: row;
  padding-horizontal: ${scale(20)};
  align-items: center;
  justify-content: space-around;
  border-style: solid;
  border-bottom-color: ${colors.thinLineColor};
  border-bottom-width: 0.5;
`;
