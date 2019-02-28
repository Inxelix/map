import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


import {
	colors,
} from '../../../constants';
import {
	ModalInputWrapper,
	ModalInput,
	ModalWrapper,
	ModalText,
	ModalCancelWrapper,
	ModalSaveWrapper,
	ModalTopTextWrapper,
	ModalBottomTextWrapper,
	RadioButtonWrapper,
} from '../components';


type Props = {
	onChange: PropTypes.func,
};

export class CustomModal extends PureComponent<Props> {
	constructor(props) {
    super(props);
    this.state = {
      selectedType: 'кстати',
      types: [
        'кстати',
        ',',
        'я',
        'хокага',
      ]
    };
   };

	state = {
		fieldText: '',
	};

	onMarkerTextChange = (text) => {
		this.setState({ 
			fieldText: text,
		});
	};

	onSubmit = () => {
		const { onChange, onSavePress } = this.props;
		const { fieldText, selectedType } = this.state;

		onChange(fieldText);

		onSavePress(fieldText, selectedType);
	};

	render() {
		const { fieldText } = this.state;
		const { onChange, onSavePress, onCancelPress } = this.props;
		return (
			<ModalWrapper>

				<ModalTopTextWrapper>
					<ModalText 
						style={{ alignSelf: 'center' }}
					>
						Установка метки
					</ModalText>
					<RadioButtonWrapper>
						<RadioForm
 						radio_props={this.state.types.map((e, i) => {
              return { label: e, value: e };
            })}
  					initial={0}
  					animation={false}
  					buttonColor={colors.primaryColor}
  					selectedButtonColor={colors.primaryColor}
  					onPress={(value) => {this.setState({selectedType:value})}}
					/>
					</RadioButtonWrapper>
					<ModalInputWrapper>
						<ModalInput
							selectionColor={colors.primaryColor}
							autoCorrect={false}
							value={fieldText}
							placeholder="Блямс"
							onChangeText={this.onMarkerTextChange}
							onSubmitEditing={this.onSubmit}
							returnKeyType="done"
							blurOnSubmit={false}
						/>
					</ModalInputWrapper>
				</ModalTopTextWrapper>

				<ModalBottomTextWrapper>
					<ModalCancelWrapper
						onPress={onCancelPress}
					>
						<ModalText>
							Отмена
						</ModalText>
					</ModalCancelWrapper>
					<ModalSaveWrapper
						onPress={this.onSubmit}
					>
						<ModalText>
							Сохранить
						</ModalText>
					</ModalSaveWrapper>
				</ModalBottomTextWrapper>

			</ModalWrapper>
		);
	}
}

CustomModal.defaultProps = {
	onChange: () => {},
};