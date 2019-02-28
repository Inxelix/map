import React from 'react';

import {
	BottomWrapper,
	BottomText,
	BottomTextWrapper,
} from '../components';


export const RegBottomContainer = ({ onPress, text }) => (
	<BottomWrapper>
		<BottomTextWrapper
			onPress={onPress}
		>
			<BottomText>
				{text}
			</BottomText>
		</BottomTextWrapper>
	</BottomWrapper>
);