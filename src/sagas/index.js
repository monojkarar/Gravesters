import { call } from "@redux-saga/core/effects";

export default function* rootSaga() {
  yield call(console.log, 'I am the root saga');
}
