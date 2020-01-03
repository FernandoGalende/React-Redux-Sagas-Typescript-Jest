import { combineReducers } from 'redux';
import authReducer from './Auth/reducer';

const AppReducer = combineReducers({
  auth: authReducer,
});

const rootReducer = (state:any, action:any) => {
  return AppReducer(state, action);
}

export default rootReducer;
