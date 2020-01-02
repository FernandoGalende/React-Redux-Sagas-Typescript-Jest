import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import { LOGOUT } from './Auth/actionTypes';

const reducerFiles = require.context('.', true, /reducer.js$/);
const reducerModules = reducerFiles.keys().map(reducerFiles);
const reducers = reducerModules.reduce((acc, reducer) => {
  Object.entries(reducer.default).forEach(([key, value]) => {
    Object.assign(acc, { [key]: value });
  });
  return acc;
}, {});

const initialStateFiles = require.context('.', true, /initialState.js$/);
const initialStateModules = initialStateFiles.keys().map(initialStateFiles);
const initialStates = initialStateModules.reduce((acc, state) => {
  Object.entries(state.default).forEach(([key, value]) => {
    Object.assign(acc, { [key]: value });
  });
  return acc;
}, {});

const AppReducer = combineReducers({
  loadingBar: loadingBarReducer,
  ...reducers,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    return AppReducer({
      loadingBar: state.loadingBar,
      ...initialStates,
    }, action);
  }
  return AppReducer(state, action);
};

export default rootReducer;
