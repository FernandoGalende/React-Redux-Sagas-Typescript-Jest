import { put, call } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actions from './actionCreators';
import { content as contentAPI } from '../../api';

function* getRecommendationSaga({ content }: actionTypes.GetRecommendationAction){
	try {
		localStorage.clear();
		yield put(actions.setUser(content));
		localStorage.setItem('user', JSON.stringify(content));
		const { jwt } = yield call(contentAPI.getToken, content);
		localStorage.setItem('jwt', jwt);
        const recommendation = yield call(contentAPI.getRecommendation, jwt);
		yield put(actions.setRecommendation(recommendation));
	} catch (error) {
		console.error('GET_RECOMMENDATION_SAGA_ERROR: ', error);
	}
}

export default {
	[actionTypes.GET_RECOMMENDATION]: getRecommendationSaga
};
