import { connect } from 'react-redux';

import MainScreenComponent from './MainScreen';
import { 
	addMarker,
	getMarker,
} from './actions';


const mapStateToProps = state => ({
	fetching: state.markers.fetching,
	status: state.markers.status,
	error: state.markers.error,
	markers: state.markers.markers,
});

const mapDispatchToProps = dispatch => ({
	addMarker: (location, description, type) => {
		dispatch(addMarker(location, description, type));
	},
	getMarker: () => {
		dispatch(getMarker());
	},
});

export const MainScreen = connect(
	mapStateToProps, 
	mapDispatchToProps,
)(MainScreenComponent);