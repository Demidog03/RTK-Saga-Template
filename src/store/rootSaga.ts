import {all} from 'redux-saga/effects'
import {postSaga} from './post/post.saga.ts'

export function* rootSaga() {
  yield all([postSaga()])
}
