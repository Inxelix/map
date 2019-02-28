import React, { PureComponent } from 'react';

import {
	TitleWrapper,
	TitleTextWrapper,
} from '../components';


export const RegTitleContainer = ({ title }) => (
	<TitleWrapper>
		<TitleTextWrapper>
			{title}
		</TitleTextWrapper>
	</TitleWrapper>
);