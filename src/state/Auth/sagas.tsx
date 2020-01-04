import * as actionTypes from './actionTypes';

import { content as contentAPI } from '../../api';

function* getToken(credentials:any) {
  try {
    const { token } = yield contentAPI.getToken(credentials);
    localStorage.setItem('token', token);
  } catch (error) {
  }
}

function* setUser(credentials:any) {
    try {
        localStorage.setItem('user', credentials.content);        
        const {jwt}  = yield contentAPI.getToken(credentials.content);
        localStorage.setItem('jwt', jwt);
        window.location.href = '/recomendation';
    } catch (error) {
        console.error('SET_USER_SAGA_ERROR: ', error)
    }
  }

export default {
    [actionTypes.GET_TOKEN]: getToken,
    [actionTypes.SET_USER]: setUser,
}
