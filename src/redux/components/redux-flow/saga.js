import { put, takeEvery, delay } from "redux-saga/effects";
import { INCREMENT_ASYNC, INCREMENT } from "./actions";

function* incrementAsyncSaga() {
  yield delay(1000); // wait 1 sec
  yield put({ type: INCREMENT });
}

export function* rootSaga() {
  yield takeEvery(INCREMENT_ASYNC, incrementAsyncSaga);
}