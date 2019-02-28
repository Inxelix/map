import styled from 'styled-components';
import {
	verticalScale,
	scale,
} from 'react-native-size-matters';

import {
	colors,
} from '../../../constants';


export const ModalWrapper = styled.View`
	width: 90%;
	height: ${verticalScale(250)};
	align-items: center;
	justify-content: space-evenly;
	background-color: ${colors.secondaryTextColor};
	border-radius: ${scale(5)};
`;