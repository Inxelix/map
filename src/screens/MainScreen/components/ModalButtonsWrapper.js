import styled from 'styled-components';
import {
	scale,
} from 'react-native-size-matters';

import {
	colors,
} from '../../../constants';


export const ModalCancelWrapper = styled.TouchableOpacity`
	justify-content: center;
	flex: 1;
	align-items: center;
	border-top-width: 1;
	border-top-color: ${colors.thinLineColor};
`;

export const ModalSaveWrapper = styled(ModalCancelWrapper)`
	border-left-width: 1;
	border-left-color: ${colors.thinLineColor};
`;