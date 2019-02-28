import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { 
	applyMiddleware,
	createStore,
} from 'redux';
import ReduxThunk from 'redux-thunk';

import combinedReducers from './src/store';
import {
  RootScreen,
} from './src/screens';


export const store = createStore(combinedReducers, applyMiddleware(ReduxThunk));

export default class App extends Component {
  render() {
    return (
    	<Provider
    		store={store}
    	>
      	<RootScreen />
      </Provider>
    );
  }
}