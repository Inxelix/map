import styled from 'styled-components';
import {
	scale,
	verticalScale,
} from 'react-native-size-matters';

import {
	colors,
} from '../../../constants';


export const AddMarkerButtonWrapper = styled.TouchableOpacity`
	width: ${scale(230)};
	height: ${verticalScale(50)};
	border-color: ${colors.primaryTextColor};
	border-style: solid;
	border-width: 1;
	border-radius: ${scale(10)};
	justify-content: center;
	align-items: center;
	margin-bottom: ${verticalScale(10)};
`;