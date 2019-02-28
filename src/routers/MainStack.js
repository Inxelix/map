import { createStackNavigator } from 'react-navigation';

import {
	MAIN_SCREEN
} from '../constants';
import {
	MainScreen
} from '../screens';


const MainStack = createStackNavigator(
	{
		[MAIN_SCREEN]: {
			screen: MainScreen,
		},
	},
	{
		initialRouteName: MAIN_SCREEN,
	},
);

export default MainStack;
