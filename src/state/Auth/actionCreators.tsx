import * as actionTypes from './actionTypes';

export function setToken(token: string): actionTypes.SetTokenAction {
    return {
      type:  actionTypes.SET_TOKEN, 
      content: token
    };
  }