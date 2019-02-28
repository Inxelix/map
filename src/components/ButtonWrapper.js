import styled from 'styled-components';
import {
	scale,
	verticalScale,
} from 'react-native-size-matters';

import {
	colors,
} from '../constants';


export const ButtonWrapper = styled.TouchableOpacity`
	width: ${scale(200)};
	height: ${verticalScale(50)};
	border-color: ${colors.primaryTextColor};
	border-style: solid;
	border-width: 1;
	border-radius: ${scale(30)};
	justify-content: center;
	align-items: center;
	margin-top: ${scale(10)};
`;