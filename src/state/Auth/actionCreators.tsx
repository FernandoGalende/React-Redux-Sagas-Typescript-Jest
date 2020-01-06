import * as actionTypes from './actionTypes';
import { User, Recomendation } from './types';

export function getRecommendation(
	user: User
): actionTypes.GetRecommendationAction{
	return {
		type: actionTypes.GET_RECOMMENDATION,
		content: user
	};
}

export function setUser(user: User): actionTypes.SetUserAction{
	return {
		type: actionTypes.SET_USER,
		content: user
	};
}

export function setRecommendation( recommendation: Recomendation[]): actionTypes.SetRecommendationAction{
	return {
		type: actionTypes.SET_RECOMMENDATION,
		content: recommendation
	};
}
