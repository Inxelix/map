import { createStackNavigator } from 'react-navigation';

import {
	LOGIN_SCREEN,
	REG_SCREEN,
} from '../constants';
import {
	LoginScreen,
	RegScreen,
} from '../screens';


const AuthenticationStack = createStackNavigator(
	{
		[LOGIN_SCREEN]: {
			screen: LoginScreen,
		},
		[REG_SCREEN]: {
			screen: RegScreen,
		},
	},
	{
		initialRouteName: LOGIN_SCREEN,
	},
);

export default AuthenticationStack;
