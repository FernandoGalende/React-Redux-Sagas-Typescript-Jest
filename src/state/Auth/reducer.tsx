import * as actions from './actionTypes';
import initialState from './initialState';

export interface AuthState {
	token: string;
	firstName: string;
	address: string;
	occupation: string;
	hasChildren: boolean;
	numberOfChildren: number;
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
		case actions.SET_USER:
			return {
				...state,
				firstName: action.content.first_name,
				address: action.content.address,
				occupation: action.content.ocupation,
				hasChildren: action.content.hasChildren,
				numberOfChildren: action.content.numberOfChildren,
				email: action.content.email
			};
		default:
			return state;
	}
}
