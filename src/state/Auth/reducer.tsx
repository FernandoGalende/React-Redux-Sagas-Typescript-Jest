import * as actions from './actionTypes';
import initialState from './initialState';
import { AuthState } from './types';

export default function authReducer(
	state: AuthState = initialState,
	action: actions.AuthAction
): AuthState{
	switch (action.type) {
		case actions.SET_USER:
			return {
				...state,
				...action.content
			};
		case actions.SET_RECOMMENDATION:
			return {
				...state,
				recommendations: action.content
			};
		default:
			return state;
	}
}
