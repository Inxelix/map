import styled from 'styled-components';
import {
	scale,
	verticalScale,
} from 'react-native-size-matters';


export const HeaderCenterWrapper = styled.View`
	flex: 2;
	justify-content: flex-end;
	align-items: center;
`;

export const HeaderLeftWrapper = styled.TouchableOpacity`
	flex: 1;
	justify-content: flex-end;
	align-items: flex-start;
	padding-bottom: ${verticalScale(2)};
`;

export const HeaderRightWrapper = styled(HeaderLeftWrapper)`
	align-items: flex-end;
	padding-bottom: null;
`;