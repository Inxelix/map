import {
	executeRequest,
} from '../utils';


export const registerNetworkRequest = (username, password) => executeRequest({
	method: 'POST',
	url: 'public/user/auth/reg',
	body: {
		content: JSON.stringify({ username, password }),
		contentType: 'application/json',
	},
});

export const loginNetworkRequest = (username, password) => executeRequest({
	method: 'POST',
	url: 'public/user/auth/login',
	body: {
		content: JSON.stringify({ username, password }),
		contentType: 'application/json',
	},
});