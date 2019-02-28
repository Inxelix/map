import { combineReducers } from 'redux';

import { registration } from '../screens/RegScreen/reducers';
import { login } from '../screens/LoginScreen/reducers';
import { markers } from '../screens/MainScreen/reducers';


export default combineReducers({ 
	registration,
	login,
	markers,
});