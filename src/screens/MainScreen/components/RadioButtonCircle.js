import styled from 'styled-components';
import {
	verticalScale,
	scale,
} from 'react-native-size-matters';

import {
	colors,
} from '../../../constants';


export const RadioButtonCircle = styled.View`
	border-radius: ${scale(100)};
	width: ${scale(10)};
	height: ${verticalScale(10)};
	margin-right: ${scale(5)};
	border-color: ${colors.primaryColor};
	border-style: solid;
	border-width: 1;
`;

export const PickedRadioButtonCircle = styled(RadioButtonCircle)`
	background-color: ${colors.primaryColor};
`;