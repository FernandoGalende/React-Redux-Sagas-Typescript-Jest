import * as actionTypes from './actionTypes';

export function setUser(user: any): actionTypes.SetUserAction {
    return {
      type:  actionTypes.SET_USER, 
      content: user
    };
  }

export function setToken(token: string): actionTypes.SetTokenAction {
    return {
      type:  actionTypes.SET_TOKEN, 
      content: token
    };
  } 