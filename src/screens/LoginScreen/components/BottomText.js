import styled from 'styled-components';
import {
	scale,
} from 'react-native-size-matters';

import {
	colors,
} from '../../../constants';


export const BottomText = styled.Text`
	color: ${colors.primaryTextColor};
	font-size: ${scale(15)};
`;