import React from 'react';

import {
	HeaderWrapper,
	HeaderCenterWrapper,
	HeaderRightWrapper,
	HeaderText,
} from '../components';


export const Header = () => (
	<HeaderWrapper>
		<HeaderCenterWrapper>
			<HeaderText>
				Pasha
			</HeaderText>
		</HeaderCenterWrapper>

		<HeaderRightWrapper>
			<HeaderText>
				Loh
			</HeaderText>
		</HeaderRightWrapper>
	</HeaderWrapper>
);