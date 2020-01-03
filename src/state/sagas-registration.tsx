import { all, fork, takeLatest } from 'redux-saga/effects';
import authSagas from './Auth/sagas';

const sagas = {
	...authSagas
};

const watchers = Object.entries(sagas).map(
	([ key, value ]) =>
		function* watchSaga(){
			yield takeLatest(key, value);
		}
);

export default function* root(){
	yield all(watchers.map((watcher) => fork(watcher)));
}
