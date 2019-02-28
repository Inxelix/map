import styled from 'styled-components';
import {
	scale,
	verticalScale,
} from 'react-native-size-matters';

import {
	colors,
} from '../../../constants';


export const ModalInputWrapper = styled.View`
	width: 80%;
	border-radius: ${scale(30)};
	height: ${verticalScale(20)};
	border-color: ${colors.thinLineColor};
	border-style: solid;
	border-width: 1;
	padding-horizontal: ${scale(20)};
	margin-vertical: ${verticalScale(20)};
	flex-direction: row;
`;