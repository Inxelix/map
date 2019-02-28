import { handleActions } from 'redux-actions';

import {
	registerRequest,
	registerSuccess,
	registerFailure,
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

export const registration = handleActions(
	{
		[setToken](state, { payload }) {
			return {
				...state,
				token: payload.token,
			};
		},
		[registerRequest](state) {
			return {
				...state,
				fetching: true,
			};
		},
		[registerSuccess](state, { payload }) {
			return {
				...state,
				username: payload.username,
				fetching: false,
				status: 'ok',
				error: null,
			};
		},
		[registerFailure](state, { payload }) {
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
