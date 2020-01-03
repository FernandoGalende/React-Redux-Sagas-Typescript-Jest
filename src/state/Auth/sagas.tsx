import * as actionTypes from './actionTypes';

import { content as contentAPI } from '../../api';

function* getToken(credentials:any) {
  try {
    const { token } = yield contentAPI.getToken(credentials);
    localStorage.setItem('token', token);
  } catch (error) {
  }
}

export default {
    [actionTypes.GET_TOKEN]: getToken
}
