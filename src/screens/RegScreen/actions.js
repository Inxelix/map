import { createAction } from 'redux-actions';
import { AsyncStorage } from 'react-native';

import { 
	registerNetworkRequest,
} from '../../networkers';
import {
	setToken,
} from '../../constants';


export const registerRequest = createAction('REGISTER_REQUEST');
export const registerSuccess = createAction('REGISTER_SUCCESS');
export const registerFailure = createAction('REGISTER_FAILURE');

export const register = (username, password) => async (dispatch) => {
	dispatch(registerRequest());

	try {
		const response = await registerNetworkRequest(username, password);

		const { token } = response;
		dispatch(setToken({ token }));
		AsyncStorage.setItem('jwt', token);

		dispatch(registerSuccess({ username }));
	} catch (error) {
		dispatch(registerFailure({ error }));
	}
}