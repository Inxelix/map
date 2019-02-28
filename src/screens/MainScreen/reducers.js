import { handleActions } from 'redux-actions';

import {
	markersRequest,
	addMarkersSuccess,
	getMarkersSuccess,
	markersFailure,
} from './actions';


const initialState = {
	fetching: false,
	status: null,
	error: null,
	markers: null,
};

export const markers = handleActions(
	{
		[markersRequest](state) {
			return {
				...state,
				fetching: true,
			};
		},
		[addMarkersSuccess](state, { payload }) {
			return {
				...state,
				fetching: false,
				status: 'added',
				error: null,
			};
		},
		[getMarkersSuccess](state, { payload }) {
			return {
				...state,
				fetching: false,
				status: 'got',
				error: null,
				markers: payload.markers,
			}
		},
		[markersFailure](state, { payload }) {
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