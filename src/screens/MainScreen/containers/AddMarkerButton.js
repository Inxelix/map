import React from 'react';
import PropTypes from 'prop-types';

import {
	AddMarkerButtonWrapper,
} from '../components';
import {
	ButtonText,
} from '../../../components';


export const AddMarkerButton = ({ onButtonPress, hide }) => (	
	!hide && (
	<AddMarkerButtonWrapper
		onPress={onButtonPress}
	>
		<ButtonText>
			Добавить метку					
		</ButtonText>
	</AddMarkerButtonWrapper>
	)
);

AddMarkerButton.propTypes = {
	onPress: PropTypes.func.isRequired,
};

AddMarkerButton.defaultProps = {
	onPress: () => {},
}