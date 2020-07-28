import { all, take, put, call } from '@redux-saga/core/effects';
import { actions, resultImageLoaded } from './actions';

export function* showResults() {
  yield take(actions.FINISH_TEST);
  let imgURL = yield call(fetch, 'https://api.thecatapi.com/v1/images/search');
  let data = yield imgURL.json();
  yield put(resultImageLoaded(data[0].url));
}

export default function* rootSaga() {
  yield all([showResults()]);
}
