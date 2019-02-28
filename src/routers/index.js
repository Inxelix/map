import {
	createSwitchNavigator,
	createAppContainer,
} from 'react-navigation';

import {
	MAIN_STACK,
	AUTHENTICATION_STACK,
} from '../constants';
import MainStack from './MainStack';
import AuthenticationStack from './AuthenticationStack';

const root = createSwitchNavigator(
	{
		[AUTHENTICATION_STACK]: {
			screen: AuthenticationStack,
		},
		[MAIN_STACK]: {
			screen: MainStack,
		},
	},
	{
		initialRouteName: AUTHENTICATION_STACK,
	},
);

export default createAppContainer(root);