import { createAction } from 'redux-actions';
import { AsyncStorage } from 'react-native';

import { 
	loginNetworkRequest,
} from '../../networkers';
import {
	setToken,
} from '../../constants';


export const loginRequest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFailure = createAction('LOGIN_FAILURE');

export const login = (username, password) => async (dispatch) => {
	dispatch(loginRequest());

	try {
		const response = await loginNetworkRequest(username, password);

		const { token } = response;
		dispatch(setToken({ token }));
		AsyncStorage.setItem('jwt', token);

		dispatch(loginSuccess({ username }));
	} catch (error) {
		dispatch(loginFailure({ error }));
	}
}