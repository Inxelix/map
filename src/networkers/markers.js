import {
	executeRequest,
} from '../utils';


export const addMarkerNetworkRequest = (location, description, type) => executeRequest({
	method: 'POST',
	url: 'public/user/markers/markers',
	body: {
		content: JSON.stringify({ location, description, type }),
		contentType: 'application/json',
	},
});

export const getMarkersNetworkRequest = () => executeRequest({
	method: 'GET',
	url: 'public/user/markers/markers',
});
