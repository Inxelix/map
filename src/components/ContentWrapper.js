import styled from 'styled-components';

import {
	colors,
} from '../constants';


export const ContentWrapper = styled.View`
	flex: 1;
`;

export const PurpleContentWrapper = styled(ContentWrapper)`
	background-color: ${colors.primaryColor};
`; 