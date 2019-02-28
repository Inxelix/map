import { createAction } from 'redux-actions';

import { 
	addMarkerNetworkRequest,
	getMarkersNetworkRequest,
} from '../../networkers';


export const markersRequest = createAction('MARKERS_REQUEST');
export const addMarkersSuccess = createAction('ADD_MARKERS_SUCCESS');
export const getMarkersSuccess = createAction('GET_MARKERS_SUCCESS');
export const markersFailure = createAction('MARKERS_FAILURE');

export const addMarker = (location, description, type) => async (dispatch) => {
	dispatch(markersRequest());

	try {
		await addMarkerNetworkRequest(location, description, type);

		dispatch(addMarkersSuccess());
	} catch (error) {
		dispatch(markersFailure({ error }));
	}
}

export const getMarker = () => async (dispatch) => {
	dispatch(markersRequest());

	try {
		const { markers } = await getMarkersNetworkRequest();

		dispatch(getMarkersSuccess({ markers }));
	} catch (error) {
		dispatch(markersFailure({ error }));
	}
}