import { connect } from 'react-redux';

import RegScreenComponent from './RegScreen';
import { register } from './actions';


const mapStateToProps = state => ({
	fetching: state.registration.fetching,
	status: state.registration.status,
	error: state.registration.error,
});

const mapDispatchToProps = dispatch => ({
	register: (username, password) => {
		dispatch(register(username, password));
	},
})

export const RegScreen = connect(
	mapStateToProps, 
	mapDispatchToProps,
)(RegScreenComponent);