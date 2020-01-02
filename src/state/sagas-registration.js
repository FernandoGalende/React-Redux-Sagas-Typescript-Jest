import { all, fork, takeLatest } from 'redux-saga/effects';

import accountSagas from './Account/sagas';
import authSagas from './Auth/sagas';
import contentSagas from './Content/sagas';
import groupSagas from './Groups/sagas';
import coursesSagas from './Courses/sagas';

const sagas = {
  ...accountSagas,
  ...authSagas,
  ...contentSagas,
  ...groupSagas,
  ...coursesSagas,
};

const watchers = Object.entries(sagas).map(([key, value]) => (
  function* watchSaga() {
    yield takeLatest(key, value);
  }));

export default function* root() {
  yield all(watchers.map(watcher => fork(watcher)));
}
