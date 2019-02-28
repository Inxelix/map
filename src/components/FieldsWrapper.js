import styled from 'styled-components';
import {
	scale,
	verticalScale,
} from 'react-native-size-matters';

import {
	colors,
} from '../constants';


export const FieldsWrapper = styled.View`
	width: 85%;
	margin-bottom: ${verticalScale(20)};
	border-color: ${colors.thinLineColor};
	background-color: ${colors.secondaryTextColor}
	border-style: solid;
	border-width: 1;
	border-radius: ${scale(15)};
	padding-horizontal: ${scale(10)};
`;