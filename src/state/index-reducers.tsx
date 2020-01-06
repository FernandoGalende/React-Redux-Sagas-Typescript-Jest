import { combineReducers } from 'redux';
import authReducer from './Auth/reducer';
import { AuthState } from './Auth/types';
import { AuthAction } from './Auth/actionTypes';

const AppReducer = combineReducers({
	auth: authReducer
});

const rootReducer = (state:( AuthState | any), action: AuthAction) => {
	return AppReducer(state, action);
};

export default rootReducer;
