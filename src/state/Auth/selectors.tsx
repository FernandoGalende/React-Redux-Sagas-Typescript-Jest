import { AppState } from './types';

export const getRecommendations = (state: AppState) =>
	state.auth.recommendations;
