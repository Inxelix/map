import { handleActions } from 'redux-actions';

import {
	loginRequest,
	loginSuccess,
	loginFailure,
} from './actions';
import {
	setToken,
} from '../../constants';


const initialState = {
	fetching: false,
	username: null,
	token: null,
	status: null,
	error: null,
};

export const login = handleActions(
	{
		[setToken](state, { payload }) {
			return {
				...state,
				token: payload.token,
			};
		},
		[loginRequest](state) {
			return {
				...state,
				fetching: true,
			};
		},
		[loginSuccess](state, { payload }) {
			return {
				...state,
				username: payload.username,
				fetching: false,
				status: 'ok',
				error: null,
			};
		},
		[loginFailure](state, { payload }) {
			return {
				...state,
				error: payload.error,
				fetching: false,
				status: 'error',
			};
		},
	},
	initialState,
);
