import styled from 'styled-components';
import {
	scale,
} from 'react-native-size-matters';

import {
	colors,
} from '../constants';


export const HeaderText = styled.Text`
	color: ${colors.secondaryTextColor};
	font-size: ${scale(13)};
`;

export const BodyText = styled.Text`
	color: ${colors.primaryTextColor};
	font-size: ${scale(15)};
`;