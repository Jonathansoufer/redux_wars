import { call, put } from "redux-saga/effects";

import api from "../../services/api";

import { Creators as ActorsActions } from "../ducks/actors";

export function* loadActors() {
  try {
    const response = yield call(api.get, "people");
    yield put(ActorsActions.loadActorsSuccess(response.data.results));
  } catch (error) {
    yield put(ActorsActions.loadActorsFailure);
  }
}
