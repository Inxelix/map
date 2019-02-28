import { connect } from 'react-redux';

import LoginScreenComponent from './LoginScreen';
import { login } from './actions';


const mapStateToProps = state => ({
	fetching: state.login.fetching,
	status: state.login.status,
	error: state.login.error,
});

const mapDispatchToProps = dispatch => ({
	login: (username, password) => {
		dispatch(login(username, password));
	},
})

export const LoginScreen = connect(
	mapStateToProps, 
	mapDispatchToProps,
)(LoginScreenComponent);