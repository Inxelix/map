import styled from 'styled-components';
import {
	scale,
	verticalScale,
} from 'react-native-size-matters';

import {
	colors,
	os,
	sizes,
} from '../constants';


export const HeaderWrapper = styled.View`
	background-color: ${colors.primaryColor};
	width: 100%;
	height: ${verticalScale(30) + sizes.statusBarHeight + (os.name === 'android' && scale(12))};
	flex-direction: row;
	padding-bottom: ${verticalScale(6)};
	padding-horizontal: ${scale(15)};
`;
