import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import {
	colors,
} from '../../../constants';
import {
	RadioButtonWrapper,
	RadioButtonCircle,
	PickedRadioButtonCircle,
	TouchableRadioButtonWrapper,
} from '../components';
import {
	BodyText,
} from '../../../components';


export class RadioButton extends PureComponent<Props> {
	state = {
		data: ['Проблема 1', 'Проблема 2', 'Проблема 3'],
		isPicked: 0,
	};

	render() {
		const { isPicked, data } = this.state
		return (
			<RadioButtonWrapper>
				{
					this.state.data.map((data, key) => {
						return (
						<View>
							{isPicked === key ?
								<TouchableRadioButtonWrapper>
									<PickedRadioButtonCircle />
									<BodyText>{data}</BodyText>
								</TouchableRadioButtonWrapper>
								:
								<TouchableRadioButtonWrapper onPress={() => {this.setState({isPicked: key})}}>
									<RadioButtonCircle />
									<BodyText>{data}</BodyText>
								</TouchableRadioButtonWrapper>
							}
						</View>
						)
					})
				}
			</RadioButtonWrapper>
		)
	}
}