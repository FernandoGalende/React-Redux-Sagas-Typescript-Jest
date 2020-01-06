import {User, Recomendation} from './types'

export const GET_RECOMMENDATION = 'GET_RECOMMENDATION';
export interface GetRecommendationAction {
    type: typeof GET_RECOMMENDATION;
    content: User;
}

export const SET_USER = 'SET_USER';
export interface SetUserAction {
    type: typeof SET_USER;
    content: User
}

export const SET_RECOMMENDATION = 'SET_RECOMMENDATION';
export interface SetRecommendationAction {
    type: typeof SET_RECOMMENDATION;
    content: Recomendation[]
}

export type AuthAction =
  | GetRecommendationAction
  | SetRecommendationAction
  | SetUserAction;
