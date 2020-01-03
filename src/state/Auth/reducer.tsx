import * as actions from './actionTypes';
import initialState from './initialState';

export interface AuthState {
	token: string;
	first_name: string;
	address: string;
	ocupation: string;
	hasChildren: boolean;
	childrenNumber: number;
	email: string;
}

export default function authReducer(
	state: AuthState = initialState,
	action: actions.AuthAction
): AuthState{
	switch (action.type) {
		case actions.SET_TOKEN:
			return {
				...state,
				token: action.content
			};
		default:
			return state;
	}
}
