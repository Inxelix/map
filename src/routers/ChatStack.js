import { createStackNavigator } from 'react-navigation';

import {
	CHAT_SCREEN,
} from '../constants';
import {
	ChatScreen,
} from '../screens';


const ChatStack = createStackNavigator(
	{
		[CHAT_SCREEN]: {
			screen: ChatScreen,
		},
	},
	{
		initialRouteName: CHAT_SCREEN,
	},
);

export default ChatStack;
